class Admin::RegistrationSessionsController < ApplicationController
  skip_around_filter :switch_locale
  before_action :set_registration_session, only: [:edit, :update, :destroy]
  before_action :authenticate_user!

  def index
    @registration_sessions = RegistrationSession.list_data
    @applicants = Applicant.csv_data
    @delete_confirmation = params[:confirm_delete]
  end

  def show
    @registration_session = RegistrationSession.registration_session_detail(params[:id], "en")
    @applicants = RegistrationSession.find(params[:id]).applicants.list_data
  end

  def new; 
    @registration_sessions = RegistrationSession.list_data
    @all_applicants = Applicant.csv_data
  end

  def edit
    @registration_sessions = RegistrationSession.list_data
    @all_applicants = Applicant.csv_data
    @registration_session_id = @registration_session.id
    @location = @registration_session.location
    @start_time = @registration_session.start_time
    @end_time = @registration_session.end_time
    @applicants = @registration_session.applicant_limit
  end

  def create
    RegistrationSession.create!(registration_session_params)
    redirect_to admin_registration_sessions_path
  end

  def update
    @registration_session.update!(registration_session_params)
    redirect_to admin_registration_sessions_path
  end

  def destroy
    if @registration_session.applicants.empty?
      @registration_session.destroy
      redirect_to action: 'index', confirm_delete: true
    else
      redirect_to action: 'index', confirm_delete: 'error'
    end
  end

  private

  def set_registration_session
    @registration_session = RegistrationSession.find(params[:id])
  end

  def registration_session_params
    params.permit(:location, :start_time, :end_time, :applicant_limit)
  end
end
