import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminRegistrationSessionShow from '~/components/RegistrationSession/AdminOnly/ShowPage/AdminRegistrationSessionShow';

const container = document.getElementById('show');
const root = ReactDOM.createRoot(container);

root.render(<AdminRegistrationSessionShow />);