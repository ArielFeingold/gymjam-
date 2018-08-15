require 'pry-remote'

class UsersController < ApplicationController

  def create
    binding.remote_pry
    @user = User.new(user_params)
    if @user.save
      render :json => @user
    else
      render :json => @user.errors
    end
  end

  private

  def user_params
    params.permit(
      :email,
      :password,
      :password_confirmation,
      :name
      )
    end
end
