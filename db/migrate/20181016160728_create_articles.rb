class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.string :url
      t.date :date

      t.timestamps
    end
  end
end
