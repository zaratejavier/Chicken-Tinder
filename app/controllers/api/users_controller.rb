class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy]

  def index 
    render json: user.all
  end 

  def show
    render json: @user
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: user
    else 
      render json: users.errors, status: 422
    end  
  end

  def destroy
    render json: @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:username)
  end

  def set_user
    @user = User.find(params[:id])
  end

end
