# This migration comes from aflier_survey (originally 20190327165003)
class CreateAflierSurveyQuestionnaires < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_questionnaires do |t|
      t.string :name
      t.text :description
      t.text :thank_you
      t.boolean :complete_on_sections
      t.boolean :is_result
      t.string :key
      t.integer :questionnaire_id

      t.timestamps
    end
  end
end
