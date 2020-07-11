class Api::LikedRestaurantsController < ApplicationController
  before_action :set_liked, only: [:update]

  def index 
    render json: Liked.all
  end

  def create
    liked = Liked.new(liked_params)

    if liked.save
      render json: liked
    else
      render json: liked.errors, status: 422
    end
  end

  def update
    if @liked.update(liked_params)
      render json: @liked
    else
      render json: @liked.errors, status: 422
    end
  end

  private

  def set_liked
    @liked = Liked.find(params[:id])
  end

  def liked_params
    params.require(:liked).permit(:likedcount)
  end

end
