class Api::RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :destroy]

  def index 
    render json: restaurant.all
  end 

  def show
    render json: @restaurant
  end

  def create
    restaurant = Restaurant.new(restaurant_params)

    if restaurant.save
      render json: restaurant
    else 
      render json: restaurants.errors, status: 422
    end  
  end

  def destroy
    render json: @restaurant.destroy
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :cuisine, :image, :menu_items)
  end

  def set_restaurant
    @restaurant = Restaurant.find(params[:id])
  end
end
