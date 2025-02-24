class AddEndTimeToRegistrationSessions < ActiveRecord::Migration[7.2]
  def change
    add_column :registration_sessions, :end_time, :datetime
  end
end
