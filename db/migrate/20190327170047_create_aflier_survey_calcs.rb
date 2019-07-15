class CreateAflierSurveyCalcs < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_calcs do |t|
      t.string :name
      t.integer :first_question_id
      t.integer :second_question_id
      t.integer :first_calc_id
      t.integer :second_calc_id
      t.string :operation
      t.string :treat_repeat
      t.decimal :a_decimal

      t.timestamps
    end
  end
end
