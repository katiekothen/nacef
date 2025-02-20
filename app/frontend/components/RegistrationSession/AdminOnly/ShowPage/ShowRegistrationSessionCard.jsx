import React from 'react';
import { Button, Card, Row } from "react-bootstrap";
import EndTime from '~/components/RegistrationSession/Common/EndTime.jsx';
import ShowDeleteModal from '~/components/RegistrationSession/Common/Modals/ShowDeleteModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Print from 'print-js';

const ShowRegistrationSessionCard = (registrationSession, applicants, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) => (
  <Row>
    <Card id="registrationSessionCard" className="registration-session-card card mx-auto px-0" bg="light" text="dark" border="dark" style={{ width: "40%", height: "50%" }}>
      <Card.Header style={{ textAlign: "center" }}>
        <a href={"/admin/registration_sessions"}>Registration Session Index</a> &nbsp;&nbsp;
        <a href={"/admin/registration_sessions/new"}>New Registration Session</a> &nbsp;&nbsp;
        <Button name="print" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => {Print({ printable: 'printable', type: 'html', scanStyles: false, css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'})}}>
          <FontAwesomeIcon icon={faPrint} color="grey" />
        </Button>
      </Card.Header>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{registrationSession.location} — {registrationSession.date}</Card.Title>
        <Card.Subtitle>{registrationSession.time} — {EndTime(registrationSession.time)}</Card.Subtitle>
        <br />
        <Card.Text>Applicant Limit: {registrationSession.applicant_limit}</Card.Text>
        <Card.Text>Number of Applicants: {applicants.length}</Card.Text>
        <Row xs={2} md={2}>
          <Button href={`/admin/registration_sessions/${registrationSession.id}/edit`} size="sm" variant="outline-dark">Edit Session</Button>
          <Button size="sm" variant="outline-dark" onClick={() => ShowDeleteModal(registrationSession, registrationSession.id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}>Delete Session</Button>
        </Row>
      </Card.Body>
    </Card>
  </Row>
);

export default ShowRegistrationSessionCard;
