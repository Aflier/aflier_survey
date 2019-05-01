class CreateAflierSurveyCalcInputs < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_calc_inputs do |t|
      t.integer :calc_id
      t.integer :calc_input_id

      t.timestamps
    end
  end
end
