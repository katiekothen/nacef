import React from 'react';
import { Card } from 'react-bootstrap';

function ApplicantText(capacity, registrationSession) {
  if (capacity) {
    return <Card.Text>Session is Full</Card.Text>;
  } else {
    return <Card.Text>Available seats: {registrationSession.applicant_limit - registrationSession.applicants}</Card.Text>;
  }
}

export default ApplicantText;
