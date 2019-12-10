# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_03_192649) do

  create_table "aflier_survey_answers", force: :cascade do |t|
    t.integer "question_id"
    t.integer "unique_ident"
    t.string "a_string"
    t.decimal "a_decimal"
    t.integer "an_integer"
    t.date "a_date"
    t.time "a_time"
    t.integer "repeat_section_id"
    t.boolean "a_boolean"
    t.boolean "not_sure"
    t.string "file"
    t.boolean "other"
    t.boolean "complete"
    t.text "some_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aflier_survey_belonging_sections", force: :cascade do |t|
    t.integer "questionnaire_id"
    t.integer "question_section_id"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aflier_survey_calc_inputs", force: :cascade do |t|
    t.integer "calc_id"
    t.integer "calc_input_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aflier_survey_calcs", force: :cascade do |t|
    t.string "name"
    t.integer "first_question_id"
    t.integer "second_question_id"
    t.integer "first_calc_id"
    t.integer "second_calc_id"
    t.string "operation"
    t.string "treat_repeat"
    t.decimal "a_decimal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aflier_survey_option_answers", force: :cascade do |t|
    t.integer "answer_id"
    t.integer "option_id"
    t.integer "unique_ident"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aflier_survey_options", force: :cascade do |t|
    t.string "name"
    t.integer "position"
    t.integer "question_id"
    t.decimal "a_decimal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aflier_survey_question_inputs", force: :cascade do |t|
    t.integer "calc_id"
    t.integer "question_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aflier_survey_question_sections", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.boolean "many"
    t.boolean "default_open"
    t.boolean "restrict_controls"
    t.date "data_date"
    t.boolean "repeat_has_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aflier_survey_questionnaire_submissions", force: :cascade do |t|
    t.integer "unique_ident"
    t.integer "questionnaire_id"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aflier_survey_questionnaires", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "thank_you"
    t.boolean "complete_on_sections"
    t.boolean "is_result"
    t.string "key"
    t.integer "questionnaire_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "aflier_survey_questions", force: :cascade do |t|
    t.string "name"
    t.string "question_type"
    t.string "result_type"
    t.text "help"
    t.integer "position"
    t.boolean "allow_not_sure"
    t.boolean "text_on_other"
    t.integer "following_section_id"
    t.boolean "required"
    t.text "text_hint"
    t.integer "question_y_id"
    t.string "bounds_x"
    t.string "bounds_y"
    t.integer "calc_id"
    t.integer "question_id"
    t.integer "question_section_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "value_true"
    t.decimal "value_false"
  end

  create_table "aflier_survey_section_progresses", force: :cascade do |t|
    t.integer "unique_ident"
    t.integer "question_section_id"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
