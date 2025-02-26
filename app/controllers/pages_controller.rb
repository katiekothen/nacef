class PagesController < ApplicationController
  def home;
    @locale = params[:locale] || extract_locale_from_accept_language_header
  end

  def confirmation
    @locale = params[:locale] || extract_locale_from_accept_language_header
    @name = params[:name]
    @time = params[:time]
    @location = params[:location]
  end
end
