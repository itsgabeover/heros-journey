Rails.application.routes.draw do
  resources :events
  resources :journals
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show"

  post "/signup", to: "users#create"

  post "/newJournalEntry", to: "journals#create"

  resources :users
end
