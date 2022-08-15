# This migration comes from aflier_survey (originally 20190329175144)
class CreateAflierSurveyQuestionnaireSubmissions < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_questionnaire_submissions do |t|
      t.integer :unique_ident
      t.integer :questionnaire_id
      t.string :status

      t.timestamps
    end
  end
end
