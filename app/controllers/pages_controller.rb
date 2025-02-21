class PagesController < ApplicationController
  def home;
    @locale = params[:locale] || "en"
  end

  def confirmation
    @name = params[:name]
    @time = params[:time]
    @date = params[:date]
    @location = params[:location]
  end
end
