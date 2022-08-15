# This migration comes from aflier_survey (originally 20220815100253)
class AddSavedAtToAflierSurveyQuestionnaireSubmissions < ActiveRecord::Migration[6.1]
  def change
    add_column :aflier_survey_questionnaire_submissions, :saved_at, :datetime
  end
end
