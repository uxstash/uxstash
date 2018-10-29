class AddCategoryIdToStashes < ActiveRecord::Migration[5.2]
  def change
    add_column :stashes, :category_id, :integer
  end
end
