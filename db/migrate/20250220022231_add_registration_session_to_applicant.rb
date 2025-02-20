class AddRegistrationSessionToApplicant < ActiveRecord::Migration[7.0]
  def change
    add_reference :applicants, :registration_session, null: false, foreign_key: true
  end
end
