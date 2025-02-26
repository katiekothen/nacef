class RegistrationSessionsController < ApplicationController
  def index
    @locale = params[:locale] || extract_locale_from_accept_language_header
    @registration_sessions = RegistrationSession.list_data(locale)
    @error_adding = params[:error_adding]
  end
end
