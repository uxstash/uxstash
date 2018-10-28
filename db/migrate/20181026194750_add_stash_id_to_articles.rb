class AddStashIdToArticles < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :stash_id, :integer
  end
end
