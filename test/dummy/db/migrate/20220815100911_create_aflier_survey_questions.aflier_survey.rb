# This migration comes from aflier_survey (originally 20190327182121)
class CreateAflierSurveyQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :aflier_survey_questions do |t|
      t.string :name
      t.string :question_type
      t.string :result_type
      t.text :help
      # t.integer :question_section_id
      t.integer :position
      t.boolean :allow_not_sure
      t.boolean :text_on_other
      t.integer :following_section_id
      t.boolean :required
      t.text :general_store
      t.text :text_hint
      t.integer :question_y_id

      t.string :bounds_x
      t.string :bounds_y

      # t.references :calc, foreign_key: true
      # t.references :question, foreign_key: true
      # t.references :aflier_survey_question_section, foreign_key: true, name: 'as_question_section'

      t.integer :calc_id
      t.integer :question_id
      t.integer :question_section_id
      # t.index ["question_section_id"], name: "index_aflier_survey_questions_on_question_dection_id"

      t.decimal :value_true
      t.decimal :value_false

      t.timestamps
    end
  end
end
