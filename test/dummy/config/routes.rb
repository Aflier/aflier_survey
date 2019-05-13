Rails.application.routes.draw do
  resources :users

  mount AflierSurvey::Engine => "/aflier_survey", as: :aflier_survey
end
