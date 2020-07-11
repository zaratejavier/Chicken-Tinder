class Group < ApplicationRecord
  has_many :users
  has_many :liked_restaurants

  # def user_count 
  #   group = Group.find(params[:id])
  #   group.users.size
  # end

  #accept group code and accepts on id
  def find_by_name(name)
    select("* FROM groups")
    .where("name = #{name}")
  end
end

