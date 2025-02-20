Rails.application.routes.draw do
  # Root path
  # root 'pages#home'

  # scope "/:locale", locale: /en|es|ar|ru/ do
  #   get "/", to: "pages#home", as: :locale_root
  # end

  # Enrollment and applicant routes for users
  scope "(:locale)", locale: /en|es|ar|ru/ do
    resources :registration_sessions, only: [:index, :show] do
      resources :applicants, only: [:new, :create]
    end

    get "/", to: "pages#home", as: :locale_root

    get '/confirmation', to: 'pages#confirmation'
  end

  # Confirmation page
  # get '/confirmation', to: 'pages#confirmation'

  # Login page
  get '/login', to: 'admin/sessions#new'
  post '/admin/sessions/create', to: 'admin/sessions#create'

  #Logout page
  delete '/logout', to: 'admin/sessions#destroy'

  # Admin routes
  namespace :admin do
    resources :registration_sessions do
      resources :applicants, only:[:new, :create, :destroy, :update]
    end
  end
end
