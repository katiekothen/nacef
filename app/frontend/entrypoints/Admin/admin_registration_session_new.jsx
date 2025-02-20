import React from 'react';
import ReactDOM from 'react-dom/client';
import RegistrationSessionForm from '~/components/RegistrationSession/AdminOnly/RegistrationSessionForm';

const container = document.getElementById('new');
const root = ReactDOM.createRoot(container);

root.render(
  <RegistrationSessionForm
    location="Eloise May"
    schedule={new Date()}
    students={20}
    path="/admin/registration_sessions"
    method="post"
    admin="admin"
  />
);