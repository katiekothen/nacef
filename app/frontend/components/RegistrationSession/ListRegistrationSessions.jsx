import React from 'react';
import EndTime from '~/components/RegistrationSession/Common/EndTime.jsx';
import { Card, Col } from "react-bootstrap";
import UserListUI from '~/components/RegistrationSession/UserListUI.jsx';
  
const ListRegistrationSessions = (user, registrationSessions, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale) => {
    return registrationSessions.map((registrationSession) => (
      <Col key={registrationSession.id}>
        <Card className="registration-session-card" bg="light" text="dark" border="dark">
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Subtitle>{registrationSession.date}<br />{registrationSession.time} — {EndTime(registrationSession.time)}</Card.Subtitle>
            <br />
            {UserListUI(user, registrationSession, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale)}
          </Card.Body>
        </Card>
      </Col>
    ));
  };

export default ListRegistrationSessions;
