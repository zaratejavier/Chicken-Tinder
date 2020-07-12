Rails.application.routes.draw do

  namespace :api do 
    resources :restaurants 
  end 

  namespace :api do
    resources :groups do
      resources :liked_restaurants
    end
  end

  namespace :api do 
    resources :groups do
      resources :users
    end
  end 
end
