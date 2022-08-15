# This migration comes from aflier_survey (originally 20211012144841)
class AddLockOnSubmitToQuestionnaire < ActiveRecord::Migration[6.1]
  def change
    add_column :aflier_survey_questionnaires, :lock_on_submit, :boolean
  end
end
