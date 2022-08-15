# This migration comes from aflier_survey (originally 20210912151840)
class ChangeUniqueIdentInSubmissions < ActiveRecord::Migration[6.1]
  def change
    change_column :aflier_survey_questionnaire_submissions, :unique_ident, :string
  end
end
