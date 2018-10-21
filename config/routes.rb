Rails.application.routes.draw do
  get 'articles/index'
  get 'articles/new'
  get 'articles/show'
  get 'articles/create'
  get 'articles/edit'
  get 'articles/update'
  get 'articles/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :articles
    resources :categories
    resources :stashes
  end
end
