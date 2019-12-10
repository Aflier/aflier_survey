AflierSurvey::Engine.routes.draw do

  devise_for :users, class_name: "User"

  resources :option_answers


  resources :questionnaire_submissions

  resources :answers do
    member do
      get :choice
      get :option_choice
      get :other
    end
  end

  resources :section_progresses

  resources :question_inputs do
    member do
      get :toggle_subtract
    end
  end

  resources :calc_inputs

  resources :belonging_sections do
    member do
      get :up
    end
  end

  resources :options do
    member do
      get :up
    end
  end


  resources :questions do
    resources :options

    member do
      get :up
      get :down
      get :toggle_other
      get :type
      get :result
      get :following
      get :calc
      get :clone
      get :feed
      get :grouping
    end
  end

  resources :calcs do
    member do
      get :var_one
      get :var_two
      get :calc_one
      get :calc_two
      get :operator
      get :choice
      get :question_choice
      get :grouping
    end
  end

  resources :question_sections do
    resources :questions

    member do
      get :report
      get :repeat
      get :complete
      get :include
      get :exclude
    end
  end

  resources :questionnaires do
    member do
      get :submit
      get :assign
      get :save
    end
  end
end
