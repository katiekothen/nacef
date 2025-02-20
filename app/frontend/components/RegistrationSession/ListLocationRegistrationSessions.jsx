import React from 'react';
import EndTime from '~/components/RegistrationSession/Common/EndTime.jsx';
import { Card, Col } from "react-bootstrap";
import UserListUI from '~/components/RegistrationSession/UserListUI.jsx';
  
const ListLocationRegistrationSessions = (user, registrationSessions, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) => {
  if (registrationSessions > 0) {
    return registrationSessions.map((registrationSession) => (
      <Col key={registrationSession.id}>
        <Card className="registration-session-card" bg="light" text="dark" border="dark">
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>{registrationSession.location}</Card.Title>
            <Card.Subtitle>{registrationSession.date}<br />{registrationSession.time} — {EndTime(registrationSession.time)}</Card.Subtitle>
            <br />
            {UserListUI(user, registrationSession, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}
          </Card.Body>
        </Card>
      </Col>
    ));
  };
};

export default ListLocationRegistrationSessions;
