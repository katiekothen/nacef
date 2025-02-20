import React from 'react';
import { Alert } from "react-bootstrap";

function DisplayDeleteSuccess(deleteConfirmation) {
  if (deleteConfirmation === 'true') {
    return <Alert variant="success" dismissible>"The session was deleted successfully."</Alert>;
  } else if (deleteConfirmation === 'error') {
    return <Alert variant="danger" dismissible>"Can't delete session with registered applicants. Please remove applicants first."</Alert>;
  }
}

export default DisplayDeleteSuccess;
