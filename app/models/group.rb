class Group < ApplicationRecord
  has_many: users
  has_many: liked_restaurants
end
