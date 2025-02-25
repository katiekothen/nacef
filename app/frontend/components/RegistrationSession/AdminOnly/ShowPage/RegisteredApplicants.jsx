import React from 'react';
import { Table } from "react-bootstrap";
import TableEditForm from '~/components/RegistrationSession/AdminOnly/ShowPage/TableEditForm.jsx';
import TableRows from '~/components/RegistrationSession/AdminOnly/ShowPage/TableRows.jsx';

const RegisteredApplicants = (applicants, rowEdit, registrationSession, formValue, csrf_token, handleChange, setRowEdit, setFormValue, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) => (
  <div>
    {TableEditForm(registrationSession, formValue, csrf_token)}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="text-center" width="4%" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>#</th>
          <th className="text-center" width="16.8%">First Name</th>
          <th className="text-center" width="12.8%">Last Name</th>
          <th className="text-center" width="13.8%">Email</th>
          <th className="text-center" width="10%">Phone</th>
          <th className="text-center" width="10%">Interpreting</th>
          <th className="text-center" width="11%">Language</th>
          <th className="text-center" width="10%">Referral</th>
          <th className="text-center" width="12.6%" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {applicants.map((applicant, index) => (
          TableRows(
            rowEdit,
            formValue,
            applicant,
            index,
            handleChange,
            registrationSession,
            setRowEdit,
            setFormValue,
            setDeletePath,
            setDeleteMessage,
            setDisplayConfirmationModal
          )
        ))}
      </tbody>
    </Table>
  </div>
);

export default RegisteredApplicants;
