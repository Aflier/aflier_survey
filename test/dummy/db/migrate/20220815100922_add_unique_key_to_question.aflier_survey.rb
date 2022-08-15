# This migration comes from aflier_survey (originally 20210918095949)
class AddUniqueKeyToQuestion < ActiveRecord::Migration[6.1]
  def change
    add_column :aflier_survey_questions, :unique_key, :string
  end
end
