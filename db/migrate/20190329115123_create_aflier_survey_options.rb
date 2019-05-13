class CreateAflierSurveyOptions < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_options do |t|
      t.string :name
      t.integer :position
      t.integer :question_id
      t.decimal :a_decimal

      t.timestamps
    end
  end
end
