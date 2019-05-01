module AflierSurvey
  class Calc < ApplicationRecord
    belongs_to :question_first, class_name: "Question", foreign_key: "first_question_id", optional: true
    belongs_to :question_second, class_name: "Question", foreign_key: "second_question_id", optional: true
    belongs_to :calc_first, class_name: "Calc", foreign_key: "first_calc_id", optional: true
    belongs_to :calc_second, class_name: "Calc", foreign_key: "second_calc_id", optional: true

    has_many :calc_inputs, dependent: :destroy
    has_many :the_calcs, through: :calc_inputs
    has_many :question_inputs
    has_many :questions, through: :question_inputs
    has_many :grouping_inputs
    has_many :result_groupings, through: :grouping_inputs


    # Below are used to map which result should be used based on the option selects. Used with CHOICE below.
    has_many :calc_choices
    has_many :question_choices

    DIVIDE     = 'divide'
    MULTIPLY   = 'multiple'
    CONSTANT   = 'constant'
    ADD        = 'add'
    CHOICE     = 'choice'
    LOWEST     = 'lowest'
    AVERAGE    = 'average'
    COLLECTION = 'collection'

    OPERATORS = [ADD, DIVIDE, MULTIPLY, CONSTANT, CHOICE, LOWEST, AVERAGE, COLLECTION].freeze

    def is_first_question?(question)
      if operation == ADD or operation == LOWEST or operation == CHOICE
        return true unless question_inputs.find_by(question_id: question.id).nil?
      end

      return true if first_question_id == question.id
      false
    end

    def is_second_question?(question)
      return true if second_question_id == question.id
      false
    end

    def is_first_calc?(calc)
      if operation == ADD or operation == CHOICE
        return true unless calc_inputs.find_by(calc_input_id: calc.id).nil?
      end

      return true if first_calc_id == calc.id
      false
    end

    def is_second_calc?(calc)
      return true if second_calc_id == calc.id
      false
    end

    def is_grouping?(result_grouping)
      return true unless grouping_inputs.find_by(result_grouping_id: result_grouping.id).nil?
      false
    end

    def get_average(user)
      total = 0.0

      calc_inputs.each do |calc_input|
        total += calc_input.the_calc.result(user) / calc_input.the_calc.maximum_score(user)
      end

      question_inputs.each do |question_input|
        result = question_input.question.result(user)

        return "Please answer: #{question_input.question.name}" if result.nil?

        total += result
      end

      return (total / (calc_inputs.size + question_inputs.size) * 100).to_i if operation == AVERAGE

    end

    def result(user, repeat_section)
      unless questions.empty?
        if questions.first.question_type == Question::DATE
          first_answer = questions.first.get_answer(user, repeat_section)
          return "'#{name}' required [1]" if first_answer.nil?
          return first_answer if first_answer.is_a? String
          return ((Date.today - first_answer) / 365).floor
        end
      end

      return a_decimal if operation == CONSTANT

      if operation == ADD or operation == AVERAGE
        total = 0.0

        calc_inputs.each do |calc_input|
          return 'Need calc input' if calc_input.the_calc.nil?
          result = calc_input.the_calc.result(user, repeat_section)
          return result if result.is_a? String
          total += result
        end

        question_inputs.each do |question_input|
          result = question_input.question.result(user, repeat_section)

          return "Please answer: #{question_input.question.name}" if result.nil?
          return result if result.is_a? String

          total += result
        end

        # return total / (calc_inputs.size + question_inputs.size) if operation == AVERAGE
        return total
      elsif operation == CHOICE
        option = self.question_second.get_option(user)

        # return "Choice made on #{self.question_second.name}: #{self.question_second.get_option(user).name}"

        calc_choices.each do |calc_choice|
          return calc_choice.calc_result.result(user, repeat_section) if user.option_answers.find_by(option_id: calc_choice.option_id)
        end

        question_choices.each do |question_choice|
          if user.option_answers.find_by(option_id: question_choice.option.id)
            return "#{question_choice.question.name} = #{question_choice.question.result(user, repeat_section)}"
          end
        end

        return '(1) Option needed'

      elsif operation == LOWEST
        result = 999999
        lowest_question = nil

        question_inputs.each do |question_input|
          percentage = question_input.question.percentage(user, repeat_section)

          return percentage if percentage.is_a? String

          if percentage < result
            result = question_input.question.percentage(user, repeat_section)
            lowest_question = question_input.question

            # lowest_question = question_input

            return "Please answer: #{question_input.question.name}" if result.nil?
          end
        end
        return lowest_question.result(user, repeat_section)

      elsif operation == COLLECTION
      else
        if question_first
          first = question_first.answers.find_by(user_id: user.id)&.a_decimal if question_first.question_type == Question::DECIMAL
          first = question_first.answers.find_by(user_id: user.id)&.an_integer if question_first.question_type == Question::WHOLE_NUMBER
          if question_first.question_type == Question::SELECT_ONE
            first = question_first.get_answer(user, repeat_section)
          elsif question_first.question_type == Question::RESULT
            first = question_first.result(user, repeat_section)
          end
        else
          return "#{self.name} needs a first question or calc as input" if calc_first.nil?
          first = calc_first.result(user, repeat_section)
        end

        if question_second
          second = question_second.answers.find_by(user_id: user.id)&.a_decimal if question_second.question_type == Question::DECIMAL
          second = question_second.answers.find_by(user_id: user.id)&.an_integer if question_second.question_type == Question::WHOLE_NUMBER
          second = question_second.get_answer(user, repeat_section) if question_second.question_type == Question::SELECT_ONE
        else
          return "#{self.name} needs a second question or calc as input" if calc_second.nil?
          second = calc_second.result(user, repeat_section)
        end

        return first if first.is_a? String
        return second if second.is_a? String
        return "#{question_first.name} required" if first.nil?
        return "#{question_second.name} required" if second.nil?

        if operation == DIVIDE
          return first / second
        end

        return first * second if operation == MULTIPLY
      end
    end


    def maximum_score(user)
      return a_decimal if operation == CONSTANT

      if operation == ADD or operation == AVERAGE
        total = 0.0

        max = 0.0
        calc_inputs.each do |calc_input|
          max = calc_input.the_calc.maximum_score(user) if calc_input.the_calc.maximum_score(user) > max
        end

        total += max

        question_inputs.each do |question_input|
          total += question_input.question.question_maximum(user) unless question_input.question.question_maximum(user).nil?
        end

        return total

      elsif operation == CHOICE
        calc_choices.each do |calc_choice|
          return calc_choice.calc_result.result(user) if user.option_answers.find_by(option_id: calc_choice.option_id)
        end

        return '(2) Option needed'
      elsif operation == LOWEST
        result = 999999
        lowest_question = nil

        question_inputs.each do |question_input|
          if question_input.question.percentage(user) < result
            result = question_input.question.percentage(user)
            lowest_question = question_input

            return "Please answer: #{question_input.question.name}" if result.nil?
          end
        end
        return lowest_question.question.question_maximum(user)
      else
        if question_first
          first = question_first.answers.find_by(user_id: user.id)&.a_decimal if question_first.question_type == Question::DECIMAL
          first = question_first.answers.find_by(user_id: user.id)&.an_integer if question_first.question_type == Question::WHOLE_NUMBER
          first = question_first.get_answer(user) if question_first.question_type == Question::SELECT_ONE
        else
          first = calc_first.result(user)
        end

        if question_second
          second = question_second.answers.find_by(user_id: user.id)&.a_decimal if question_second.question_type == Question::DECIMAL
          second = question_second.answers.find_by(user_id: user.id)&.an_integer if question_second.question_type == Question::WHOLE_NUMBER
          second = question_second.get_answer(user) if question_first.question_type == Question::SELECT_ONE
        else
          second = calc_second.result(user)
        end

        return "#{question_first.name} required" if first.nil?
        return "#{question_second.name} required" if second.nil?

        return first / second if operation == DIVIDE
        return first * second if operation == MULTIPLY
      end
    end

    def chosen_question(user)
      question_choices.includes(:question).each do |question_choice|
        return question_choice.question if user.option_answers.find_by(option_id: question_choice.option_id)
      end

      return '(3) Option needed'

    end

    def in_words
      if operation == ADD
        calcs = []

        calc_inputs.each do |calc_input|
          if calc_input.the_calc.nil?
            calcs += ["<b>Err:#{self.name}-#{calc_input.id}-no calc set</b>"]
            calc_input.destroy
          else
            calcs += ["#{calc_input.the_calc.in_words}"]
          end
        end

        question_inputs.each do |question_input|
          calcs += ["#{question_input.question.name}"]
        end

        return "<i>#{self.name}</i>(#{calcs.join(' <b>+</b> ')})"
      end

      return "#{name}[#{a_decimal}]" if operation == CONSTANT
      "<i>#{self.name}</i>(#{first_variable} #{operation_symbol} #{second_variable})".gsub(' -', ',')
    end

    def first_variable
      return question_first.name if question_first
      return "(#{calc_first.in_words})" if calc_first

    end

    def second_variable
      return question_second.name if question_second
      return "circular!" if calc_second and calc_second.id == self.id
      return "(#{calc_second.in_words})" if calc_second
    end

    def operation_symbol
      return '<b>/</b>' if operation == DIVIDE
      return '<b>*</b>' if operation == MULTIPLY
      return '<b>+</b>' if operation == ADD
    end

    def this_option?(calc, option)
      calc_choices.find_by(calc_result_id: calc.id, option_id: option.id)
    end

    def this_question?(question, option)
      question_choices.find_by(question_id: question.id, option_id: option.id)
    end


    def get_lowest(user, repeat_section)
      result = 999999
      lowest_question = nil

      question_inputs.each do |question_input|
        percentage = question_input.question.percentage(user, repeat_section)

        return percentage if percentage.is_a? String

        if percentage < result
          result = question_input.question.percentage(user)
          lowest_question = question_input

          return "Please answer: #{question_input.question.name}" if result.nil?
        end
      end
      return lowest_question.question
    end

  end

end
