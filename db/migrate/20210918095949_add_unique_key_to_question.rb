class AddUniqueKeyToQuestion < ActiveRecord::Migration[6.1]
  def change
    add_column :aflier_survey_questions, :unique_key, :string
  end
end
