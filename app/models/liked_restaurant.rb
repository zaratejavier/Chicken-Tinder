class LikedRestaurant < ApplicationRecord
  belongs_to :group
  belongs_to :restaurant
end
