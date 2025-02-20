class CreateRegistrationSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :registration_sessions do |t|
      t.string :location, default: "Eloise May"
      t.datetime :schedule
      t.integer :applicant_limit

      t.timestamps
    end
  end
end
