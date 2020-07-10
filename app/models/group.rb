class Group < ApplicationRecord
  has_many :users
  has_many :liked_restaurants

  # def user_count 
  #   group = Group.find(params[:id])
  #   group.users.size
  # end
end

