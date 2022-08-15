# This migration comes from aflier_survey (originally 20190329165154)
class CreateAflierSurveyQuestionInputs < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_question_inputs do |t|
      t.integer :calc_id
      t.integer :question_id

      t.timestamps
    end
  end
end
