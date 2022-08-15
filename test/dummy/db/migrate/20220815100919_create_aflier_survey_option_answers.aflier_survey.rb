# This migration comes from aflier_survey (originally 20190513161550)
class CreateAflierSurveyOptionAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_option_answers do |t|
      t.integer :answer_id
      t.integer :option_id
      t.integer :unique_ident

      t.timestamps
    end
  end
end
