Rails.application.routes.draw do
  devise_for :users
  resources :users

  mount AflierSurvey::Engine => "/aflier_survey", as: :aflier_survey
end
