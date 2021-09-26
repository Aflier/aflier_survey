class CreateAflierSurveyRepeatSections < ActiveRecord::Migration[6.1]
  def change
    create_table :aflier_survey_repeat_sections do |t|
      t.integer :question_section_id
      t.date :data_date
      t.string :unique_ident

      t.timestamps
    end
  end
end
