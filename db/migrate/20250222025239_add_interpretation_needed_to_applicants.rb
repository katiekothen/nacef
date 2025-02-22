class AddInterpretationNeededToApplicants < ActiveRecord::Migration[7.2]
  def change
    add_column :applicants, :interpretation_needed, :boolean
  end
end
