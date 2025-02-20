import React from 'react';
import ReactDOM from 'react-dom/client';
import NewApplicantForm from '~/components/Applicant/NewApplicantForm';

const container = document.getElementById('new');
const root = ReactDOM.createRoot(container);

root.render(<NewApplicantForm admin="" slash=""/>);