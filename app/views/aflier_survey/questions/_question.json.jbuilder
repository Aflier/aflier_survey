json.extract! question, :id, :name, :question_type, :help, :question_section_id, :created_at, :updated_at
json.url question_url(question, format: :json)
