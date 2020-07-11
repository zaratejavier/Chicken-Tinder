Rails.application.routes.draw do

  namespace :api do
    get "/getgroup/:name", to: "group#find_by_name(name)"
    resources :restaurants
    resources :liked_restaurants
  end

  namespace :api do 
    resources :restaurants
  end 

  namespace :api do 
    resources :groups do
      resources :users
    end
  end 

end
