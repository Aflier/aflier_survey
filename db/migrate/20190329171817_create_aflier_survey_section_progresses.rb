class CreateAflierSurveySectionProgresses < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_section_progresses do |t|
      t.integer :unique_ident
      t.integer :question_section_id
      t.string :status

      t.timestamps
    end
  end
end
