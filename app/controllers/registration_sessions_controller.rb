class RegistrationSessionsController < ApplicationController
  def index
    locale = params[:locale]
    @registration_sessions = RegistrationSession.list_data
    @may_registration_sessions = RegistrationSession.list_library_data('Eloise May', locale)
    @error_adding = params[:error_adding]
  end
end
