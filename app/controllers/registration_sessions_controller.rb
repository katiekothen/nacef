class RegistrationSessionsController < ApplicationController
  def index
    locale = params[:locale]
    @registration_sessions = RegistrationSessions.list_data
    @may_enrollments = Enrollment.list_library_data('Eloise May', locale)
    @error_adding = params[:error_adding]
  end
end
