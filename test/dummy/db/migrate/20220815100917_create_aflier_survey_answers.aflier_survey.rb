# This migration comes from aflier_survey (originally 20190329172056)
class CreateAflierSurveyAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_answers do |t|
      t.integer :question_id
      t.string :unique_ident
      t.string :a_string
      t.decimal :a_decimal
      t.integer :an_integer
      t.date :a_date
      t.time :a_time
      t.integer :repeat_section_id
      t.boolean :a_boolean
      t.boolean :not_sure
      t.string :file
      t.boolean :other
      t.boolean :complete
      t.text :some_text

      t.timestamps
    end
  end
end
