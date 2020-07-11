Rails.application.routes.draw do

  namespace :api do 
    resources :groups do
      resources :users
    end
  end 
end
