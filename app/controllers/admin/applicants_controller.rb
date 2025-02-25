class Admin::ApplicantsController < ApplicationController
  skip_around_filter :switch_locale
  before_action :set_registration_session, only: [:create]
  before_action :set_applicant, only: [:update, :destroy]
  before_action :authenticate_user!

  def new
    @registration_session_id = params[:registration_session_id]
    @errors = params[:errors].to_json
    @applicant_params = params[:applicant_params].to_json
  end

  def create
    applicant = create_applicant
    @errors = applicant.errors.messages
    case @errors
    when {}
      redirect_to admin_registration_session_path(@registration_session)
    else
      redirect_to new_admin_registration_session_applicant_path(errors: @errors, applicant_params: applicant_params, registration_session_id: @registration_session)
    end
  end

  def update
    update_applicant
    redirect_to admin_registration_session_path(@applicant.registration_session_id)
  end

  def destroy
    @applicant.destroy
    redirect_to admin_registration_session_path(@applicant.registration_session_id)
  end

  private

  def set_registration_session
    @registration_session = RegistrationSession.find(params[:registration_session_id])
  end

  def set_applicant
    @applicant = Applicant.find(params[:id])
  end

  def applicant_params
    params.permit(:first_name, :last_name, :email, :phone, :language)
  end

  def create_applicant
    @registration_session.applicants.create(applicant_params)
  end

  def update_applicant
    @applicant.update!(applicant_params)
  end
end
