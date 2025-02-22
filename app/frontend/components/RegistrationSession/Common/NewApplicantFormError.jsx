import React from 'react';
import { Alert } from 'react-bootstrap';
import ErrorHandling from '~/components/RegistrationSession/Common/ErrorHandling.jsx';

function NewApplicantFormError(errors) {
  if (errors != null) {
    return Object.keys(errors).map((errorName, index) => (
      <Alert key={index} variant="danger" dismissible>
        {(ErrorHandling(errorName))}
      </Alert>
      )
    )
  }
}

export default NewApplicantFormError;
