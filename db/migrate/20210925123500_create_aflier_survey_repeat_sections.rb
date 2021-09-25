class CreateAflierSurveyRepeatSections < ActiveRecord::Migration[6.1]
  def change
    create_table :aflier_survey_repeat_sections do |t|
      t.references :question_section, null: false, foreign_key: true
      t.date :data_date
      t.string :unique_ident

      t.timestamps
    end
  end
end
