import React from 'react';
import { Button, Card, Row } from "react-bootstrap";
import AtCapacity from '~/components/RegistrationSession/Common/AtCapacity.jsx'
import ApplicantText from '~/components/RegistrationSession/Common/ApplicantText.jsx';
import LinkRendering from '~/components/RegistrationSession/Common/LinkRendering.jsx';
import ShowDeleteModal from '~/components/RegistrationSession/Common/Modals/ShowDeleteModal.jsx';

function UserListUI(userType, registrationSession, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale) {
  const registerButton = document.getElementById("register").getAttribute("content");
  
  if (userType === "admin") {
    return (
      <div id="admin">
        <Card.Text>Applicant Limit: {registrationSession.applicant_limit}</Card.Text>
        <Card.Text>Number of Applicants: {registrationSession.applicants}</Card.Text>
        <Row xs={2} md={2}>
          <Button disabled={AtCapacity(registrationSession.applicant_limit, registrationSession.applicants)} href={`/admin/registration_sessions/${registrationSession.id}/applicants/new`} size="sm" variant="outline-dark">Add Applicant</Button>
          <Button href={`/admin/registration_sessions/${registrationSession.id}/edit`} size="sm" variant="outline-dark">Edit Session</Button>
          <Button href={`/admin/registration_sessions/${registrationSession.id}`} size="sm" variant="outline-dark">Show Details</Button>
          <Button size="sm" variant="outline-dark" onClick={() => ShowDeleteModal(registrationSession, registrationSession.id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}>Delete Session</Button>
        </Row>
      </div>
    );
  } else {
    return (
      <div id="applicant">
        {ApplicantText(AtCapacity(registrationSession.applicant_limit, registrationSession.applicants), registrationSession)}
        <div className="text-center">
          <Button disabled={AtCapacity(registrationSession.applicant_limit, registrationSession.applicants)} href={LinkRendering(AtCapacity(registrationSession.applicant_limit, registrationSession.applicants), registrationSession.id, locale)} size="sm" variant="outline-dark">{registerButton}</Button>
        </div>
      </div>
    );
  }
}

export default UserListUI;
