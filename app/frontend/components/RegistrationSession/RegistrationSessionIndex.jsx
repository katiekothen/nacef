import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row } from "react-bootstrap";
import DeleteConfirmation from '~/components/RegistrationSession/Common/Modals/DeleteConfirmation.jsx';
import DisplayDeleteSuccess from '~/components/RegistrationSession/Common/Modals/DisplayDeleteSuccess.jsx';
import NewApplicantError from '~/components/RegistrationSession/Common/NewApplicantError.jsx';
import UserHeaderUI from '~/components/RegistrationSession/UserHeaderUI.jsx';
import ListRegistrationSessions from '~/components/RegistrationSession/ListRegistrationSessions.jsx';

function RegistrationSessionIndex(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const registrationSessions = JSON.parse(document.getElementById("data").getAttribute("registrationSessions"));
  const applicants = JSON.parse(document.getElementById("data").getAttribute("applicants"));
  const newApplicantError = document.getElementById("data").getAttribute("newApplicantError");
  const deleteConfirmation = document.getElementById("data").getAttribute("deleteConfirmation");
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deletePath, setDeletePath] = useState(null);
  const locale = document.getElementById("data").getAttribute("locale");
  console.log(locale)

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };

  return (
    <div>
    <Card border="light">
      {DisplayDeleteSuccess(deleteConfirmation)}
      {NewApplicantError(newApplicantError)}
      {UserHeaderUI(props.admin, registrationSessions, applicants)}
      <Card.Title style={{ textDecorationLine: "underline", fontSize: "28px", fontWeight: "bold", textAlign: "center", margin: "2%" }}>NACEF 2025 Registration Sessions</Card.Title>
      <Row xs={2} md={3} className="g-4 justify-content-center">
        {ListRegistrationSessions(props.admin, registrationSessions, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale)}
      </Row>
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
    </Card>
    </div>
  );
}

export default RegistrationSessionIndex;
