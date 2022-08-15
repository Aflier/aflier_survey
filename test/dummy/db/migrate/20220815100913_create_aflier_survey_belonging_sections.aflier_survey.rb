# This migration comes from aflier_survey (originally 20190329135131)
class CreateAflierSurveyBelongingSections < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_belonging_sections do |t|
      t.integer :questionnaire_id
      t.integer :question_section_id
      t.integer :position

      t.timestamps
    end
  end
end
