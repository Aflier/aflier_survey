module AflierSurvey
  class RepeatSection < ApplicationRecord
    belongs_to :question_section
    has_many :answers, dependent: :destroy

    BASELINE     = 'Baseline'
    COMPLETION   = 'Completion'
    SCREEN_TYPES = [BASELINE, COMPLETION, 'Follow up', 'Other']

    def section_title(user)
      question = question_section.questions.order(:position).first
      "#{question.name}: #{question.make_repeat_answer(user, self).a_string}"
    end

    def get_data_date
      return self.data_date unless self.data_date.nil?
      self.update_attribute(:data_date, self.created_at.to_date)
      return self.data_date
    end

  end
end
