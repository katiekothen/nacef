class RegistrationSession < ApplicationRecord
  has_many :applicants

  validates :location, presence: true
  validates :schedule, presence: true
  validates :applicant_limit, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def self.list_data(locale="en")
    all.map { |registration_session| registration_session_hash(registration_session, locale) }.to_json
  end

  def self.list_library_data(location, locale)
    all.where(location:).order(:schedule).map { |registration_session| registration_session_hash(registration_session, locale) }.to_json 
  end

  def self.registration_session_detail(registration_session_id, locale)
    registration_session = find_by(id: registration_session_id.to_i)
    return nil unless registration_session

    registration_session_hash(registration_session, locale).to_json
  end

  def formatted_date(locale)
    # binding.pry
    if locale == "en"
      schedule.in_time_zone('Mountain Time (US & Canada)').strftime("%A, %B #{schedule.in_time_zone('Mountain Time (US & Canada)').day.ordinalize}")
    elsif locale == "ar"
      I18n.with_locale("ar") {I18n.l(schedule.in_time_zone('Mountain Time (US & Canada)').to_date, format: :default)}.tr("0-9", "٠-٩")
    else
      I18n.with_locale(locale) {I18n.l(schedule.in_time_zone('Mountain Time (US & Canada)').to_date, format: :default)}
    end
  end
  
  def formatted_time(locale)
    if locale == "ar"
      I18n.with_locale("ar") {I18n.l(schedule.in_time_zone('Mountain Time (US & Canada)').to_time, format: :default)}.tr("0-9", "٠-٩")
    else
      I18n.with_locale(locale) {I18n.l(schedule.in_time_zone('Mountain Time (US & Canada)').to_time, format: :default)}
    end
  end

  def applicant_limit_check
    applicants.length < applicant_limit
  end

  def self.registration_session_hash(registration_session, locale)
    {
      id: registration_session.id,
      location: registration_session.location,
      date: registration_session.formatted_date(locale),
      time: registration_session.formatted_time(locale),
      applicant_limit: registration_session.applicant_limit,
      applicants: registration_session.applicants.count
    }
  end
end
