class RegistrationSessionsController < ApplicationController
  def index
    locale = params[:locale]
    @registration_sessions = RegistrationSession.list_data
    @error_adding = params[:error_adding]
  end
end
