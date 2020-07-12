class Api::LikedRestaurantsController < ApplicationController
  before_action :set_group, only: [:index, :update, :show, :create]

  def index 
    #change this to group_id
    restaurants = @group.liked_restaurants
    render json: restaurants
  end

  def show
    liked = @group.liked_restaurants.all
    render json: liked
  end 

  def create
    liked = @group.liked_restaurants.new(liked_params)

    if liked.save
      render json: liked
    else
      render json: {errors: liked.errors, status: 422}
    end
  end

  def update
    liked = @group.liked_restaurants.find(params[:id])
    if liked.update(liked_params)
      render json: liked
    else
      render json: {errors: liked.errors, status: 422}
    end
  end

  private

  def set_group
   @group = Group.find(params[:group_id])
  end

  def liked_params
    params.permit(:likedcount,:restaurant_id, :group_id)
  end

end
