import React from 'react';
import { Alert } from "react-bootstrap";

function NewApplicantError(newApplicantError) {
  if (newApplicantError === 'true') {
    return <Alert variant="danger" dismissible>"This session is no longer available."</Alert>;
  }
}

export default NewApplicantError;
