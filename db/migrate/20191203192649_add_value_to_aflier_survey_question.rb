class AddValueToAflierSurveyQuestion < ActiveRecord::Migration[5.2]
  def change
    add_column :aflier_survey_questions, :value_true, :decimal
    add_column :aflier_survey_questions, :value_false, :decimal
  end
end
