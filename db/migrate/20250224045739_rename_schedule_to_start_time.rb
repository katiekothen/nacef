class RenameScheduleToStartTime < ActiveRecord::Migration[7.2]
  def change
    rename_column :registration_sessions, :schedule, :start_time
  end
end
