class AddGeneralStoreToQuestionnaire < ActiveRecord::Migration[6.1]
  def change
    add_column :aflier_survey_questionnaires, :include_submit, :boolean
  end
end
