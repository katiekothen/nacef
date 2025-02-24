class AddReferralToApplicants < ActiveRecord::Migration[7.2]
  def change
    add_column :applicants, :referral, :string
  end
end
