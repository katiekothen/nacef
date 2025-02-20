import React from 'react';
import ReactDOM from 'react-dom/client';
import RegistrationSessionForm from '~/components/RegistrationSession/AdminOnly/RegistrationSessionForm';

const registrationSessionID = document.getElementById("data").getAttribute("registrationSessionID");
const location = document.getElementById("data").getAttribute("location");
const schedule = new Date(document.getElementById("data").getAttribute("schedule"));
const students = document.getElementById("data").getAttribute("students");
const uri = `/admin/registration_sessions/${registrationSessionID}`;

const container = document.getElementById('edit');
const root = ReactDOM.createRoot(container);

root.render(
  <RegistrationSessionForm
    location={location}
    schedule={schedule}
    students={students}
    path={uri}
    method="patch"
    admin="admin"
  />
);