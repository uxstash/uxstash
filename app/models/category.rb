class Category < ApplicationRecord
  has_many :stashes

  validates :name, presence: true, uniqueness: true
end
