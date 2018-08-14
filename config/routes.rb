Rails.application.routes.draw do

  scope '/api' do
    resources :workouts
    resources :exercises
    resources :stats
    resources :users
    post 'user_token' => 'user_token#create'
  end

end
