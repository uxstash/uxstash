class Stash < ApplicationRecord
  has_many :articles
  belongs_to :category

  validates :name, presence: true, uniqueness: true
end
