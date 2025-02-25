Rails.application.routes.draw do
  get '/admin/login', to: 'admin/sessions#new'
  post '/admin/sessions/create', to: 'admin/sessions#create'
  # Admin routes
  namespace :admin do
    resources :registration_sessions do
      resources :applicants, only:[:new, :create, :destroy, :update]
    end
  end
  #Logout page
  delete '/logout', to: 'admin/sessions#destroy'

  scope "(:locale)", locale: /en|es|ar|ru/ do
    resources :registration_sessions, only: [:index, :show] do
      resources :applicants, only: [:new, :create]
    end

    get "/", to: "pages#home", as: :locale_root

    get '/confirmation', to: 'pages#confirmation'
  end
end
