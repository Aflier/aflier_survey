# This migration comes from aflier_survey (originally 20190327165505)
class CreateAflierSurveyQuestionSections < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_question_sections do |t|
      t.string :name
      t.text :description
      t.boolean :many
      t.boolean :default_open
      t.boolean :restrict_controls
      t.date :data_date
      t.boolean :repeat_has_date

      t.timestamps
    end
  end
end
