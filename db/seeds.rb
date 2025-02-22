require 'factory_bot_rails'
include FactoryBot::Syntax::Methods

registration_session = create(:registration_session)
create_list(:applicant, 30, registration_session:)
