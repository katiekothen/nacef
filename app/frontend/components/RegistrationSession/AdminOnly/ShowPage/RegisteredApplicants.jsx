import React from 'react';
import { Table } from "react-bootstrap";
import TableEditForm from '~/components/RegistrationSession/AdminOnly/ShowPage/TableEditForm.jsx';
import TableRows from '~/components/RegistrationSession/AdminOnly/ShowPage/TableRows.jsx';

const RegisteredApplicants = (students, rowEdit, registrationSession, formValue, csrf_token, handleChange, setRowEdit, setFormValue, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) => (
  <div>
    {TableEditForm(registrationSession, formValue, csrf_token)}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="text-center" width="4%" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>#</th>
          <th className="text-center" width="16.8%">First Name</th>
          <th className="text-center" width="22.8%">Last Name</th>
          <th className="text-center" width="23.8%">Email</th>
          <th className="text-center" width="10%">Phone</th>
          <th className="text-center" width="11%">Language</th>
          <th className="text-center" width="12.6%" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          TableRows(
            rowEdit,
            formValue,
            student,
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
