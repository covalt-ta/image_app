Rails.application.routes.draw do
  root "messages#index"
  resources :messages, only: [:new, :create, :edit, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
