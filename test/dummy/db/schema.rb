# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_18_095949) do

  create_table "action_text_rich_texts", force: :cascade do |t|
    t.string "name", null: false
    t.text "body"
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["record_type", "record_id", "name"], name: "index_action_text_rich_texts_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.integer "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

# Could not dump table "aflier_survey_answers" because of following StandardError
#   Unknown type 'string' for column 'unique_ident'

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
    t.string "unique_ident"
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
    t.boolean "include_submit"
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
    t.text "general_store"
    t.string "unique_key"
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
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
