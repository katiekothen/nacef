import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row } from "react-bootstrap";
import DeleteConfirmation from '~/components/RegistrationSession/Common/Modals/DeleteConfirmation.jsx';
import DisplayDeleteSuccess from '~/components/RegistrationSession/Common/Modals/DisplayDeleteSuccess.jsx';
import NewApplicantError from '~/components/RegistrationSession/Common/NewApplicantError.jsx';
import UserHeaderUI from '~/components/RegistrationSession/UserHeaderUI.jsx';
import ListLocationRegistrationSessions from '~/components/RegistrationSession/ListLocationRegistrationSessions.jsx';

function RegistrationSessionIndex(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const registrationSessions = JSON.parse(document.getElementById("data").getAttribute("registration_sessions"));
  const applicants = JSON.parse(document.getElementById("data").getAttribute("applicants"));
  const mayRegistrationSessions = JSON.parse(document.getElementById("data").getAttribute("may_registration_sessions"));
  const newApplicantError = document.getElementById("data").getAttribute("new_applicant_error");
  const deleteConfirmation = document.getElementById("data").getAttribute("delete_confirmation");
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deletePath, setDeletePath] = useState(null);

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };

  return (
    <Card border="light">
      {DisplayDeleteSuccess(deleteConfirmation)}
      {NewApplicantError(newApplicantError)}
      {UserHeaderUI(props.admin, registrationSessions, applicants)}
      <Card.Title style={{ textDecorationLine: "underline", fontSize: "28px", fontWeight: "bold", textAlign: "center", margin: "2%" }}>Eloise May Library Registration Sessions:</Card.Title>
      <Row xs={2} md={3} className="g-4 justify-content-center">
        {ListLocationRegistrationSessions(props.admin, mayRegistrationSessions, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}
      </Row>
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
    </Card>
  );
}

export default RegistrationSessionIndex;
