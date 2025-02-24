import React from 'react';
import ReactDOM from 'react-dom/client';
import RegistrationSessionForm from '~/components/RegistrationSession/AdminOnly/RegistrationSessionForm';

const registrationSessionID = document.getElementById("data").getAttribute("registration_session_id");
const location = document.getElementById("data").getAttribute("location");
const startTime = new Date(document.getElementById("data").getAttribute("start_time"));
const endTime = new Date(document.getElementById("data").getAttribute("end_time"));
const applicants = document.getElementById("data").getAttribute("applicants");
const uri = `/admin/registration_sessions/${registrationSessionID}`;


const container = document.getElementById('edit');
const root = ReactDOM.createRoot(container);

root.render(
  <RegistrationSessionForm
    location={location}
    startTime={startTime}
    endTime={endTime}
    applicants={applicants}
    path={uri}
    method="patch"
    admin="admin"
  />
);