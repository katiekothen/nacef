class Admin::SessionsController < ApplicationController
  def new
  end

  def create
    username = params[:username]
    password = params[:password]
    if username == Rails.application.credentials.user && BCrypt::Password.new(Rails.application.credentials.password) == password
      session[:admin] = 1
      redirect_to admin_registration_sessions_path
    else
      redirect_to login_path
    end
  end

  def destroy
    session[:admin] = nil

    redirect_to login_path
  end
end