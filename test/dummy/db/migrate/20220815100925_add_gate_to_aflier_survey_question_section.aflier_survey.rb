# This migration comes from aflier_survey (originally 20211029090815)
class AddGateToAflierSurveyQuestionSection < ActiveRecord::Migration[6.1]
  def change
    add_column :aflier_survey_question_sections, :question_id, :integer
    add_column :aflier_survey_question_sections, :option_id, :integer
    change_column :aflier_survey_option_answers, :unique_ident, :string

  end
end
