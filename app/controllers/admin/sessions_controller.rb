class Admin::SessionsController < ApplicationController
  skip_around_action :switch_locale

  def new
  end

  def create
    username = params[:username]
    password = params[:password]
    if username == Rails.application.credentials.user && Rails.application.credentials.password == password
      session[:admin] = 1
      redirect_to '/admin/registration_sessions'
    else
      redirect_to '/admin/login'
    end
  end

  def destroy
    session[:admin] = nil

    redirect_to '/admin/login'
  end
end