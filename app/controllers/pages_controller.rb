class PagesController < ApplicationController
  def home;
    @locale = params[:locale] || "en"
  end

  def confirmation
    @locale = params[:locale] || "en"
    @name = params[:name]
    @time = params[:time]
    @location = params[:location]
  end
end
