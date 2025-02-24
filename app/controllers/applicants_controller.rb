class ApplicantsController < ApplicationController
  before_action :find_registration_session, only: [:new, :create]

  def new
    @locale = params[:locale]
    redirect_to registration_sessions_path unless @registration_session.applicant_limit_check
    @registration_session_id = params[:registration_session_id]
    @errors = params[:errors].to_json
    @applicant_params = params[:applicant_params].to_json
  end

  def create
    locale = params[:locale] || "en"
    if @registration_session.applicant_limit_check
      applicant = @registration_session.applicants.create(applicant_params)
      @errors = applicant.errors.messages
      case @errors
      when {}
        redirect_to confirmation_page_path(applicant, @registration_session, locale)
      else
        redirect_to new_registration_session_applicant_path(errors: @errors, applicant_params: applicant_params)
      end
    else
      redirect_to registration_sessions_path(error_adding: true)
    end
  end

  private

  def find_registration_session
    @registration_session = RegistrationSession.find(params[:registration_session_id])
  end

  def applicant_params
    params.permit(:first_name, :last_name, :email, :phone, :interpretation_needed, :language, :referral)
  end

  def confirmation_page_path(applicant, registration_session, locale)
    confirmation_path(name: applicant.first_name, time: registration_session.formatted_time(locale),
                      location: registration_session.location, locale: locale)
  end
end
