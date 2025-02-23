import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card, Row } from "react-bootstrap";
import NewApplicantFormError from '../RegistrationSession/Common/NewApplicantFormError';
import ApplicantParamCheck from '../RegistrationSession/Common/ApplicantParamCheck';
import UserHeaderUI from '~/components/RegistrationSession/UserHeaderUI.jsx';

function NewApplicantForm(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const registrationSessionID = document.getElementById("data").getAttribute("registrationSessionID");
  const errors = JSON.parse(document.getElementById("data").getAttribute("errors"));
  const applicantParams = JSON.parse(document.getElementById("data").getAttribute("applicantParams"));
  const firstNameDisplay = document.getElementById("first_name").getAttribute("content");
  const lastNameDisplay = document.getElementById("last_name").getAttribute("content");
  const emailDisplay = document.getElementById("email").getAttribute("content");
  const phoneDisplay = document.getElementById("phone").getAttribute("content");
  const interpreterQuestion = document.getElementById("interpreter_question").getAttribute("content");
  const affirmative = document.getElementById("affirmative").getAttribute("content");
  const languageDisplay = document.getElementById("language").getAttribute("content");
  const interpretingNote = document.getElementById("interpreting_note").getAttribute("content");
  const referenceQuestion = document.getElementById("reference_question").getAttribute("content");
  const firstOption = document.getElementById("first_option").getAttribute("content");
  const secondOption = document.getElementById("second_option").getAttribute("content");
  const other = document.getElementById("other").getAttribute("content");
  const [firstName, setFirstName] = useState(ApplicantParamCheck(applicantParams, "first_name") || "");
  const [lastName, setLastName] = useState(ApplicantParamCheck(applicantParams, "last_name") || "");
  const [email, setEmail] = useState(ApplicantParamCheck(applicantParams, "email") || "");
  const [phone, setPhone] = useState(ApplicantParamCheck(applicantParams, "phone")|| "");
  const [isChecked, setIsChecked] = useState(false);
  const [language, setLanguage] = useState(ApplicantParamCheck(applicantParams, "language") || "");
  console.log(affirmative)

  const uri = `${props.slash}${props.admin}/registration_sessions/${registrationSessionID}/applicants`;

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(prevState => !prevState);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>{UserHeaderUI(props.admin)}
    <Row style={{ height: "95vh" }}>
      {NewApplicantFormError(errors)}
      <Card className="card mx-auto my-auto" style={{ width: "60%" }}>
        <Card.Title className="text-center" style={{ marginTop: "25px", marginBottom: "20px" }}>
          Please fill out the form below:
        </Card.Title>
        <Form action={uri} method="post">
          <input type="hidden" name="authenticity_token" value={csrf_token} />
          <Form.Group controlId="formFirstName">
            <Form.Label>{firstNameDisplay}</Form.Label>
            <Form.Control type="text" placeholder="Please Enter First Name" name="first_name" maxLength="100" value={firstName} onChange={handleFirstNameChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formLastName">
            <Form.Label>{lastNameDisplay}</Form.Label>
            <Form.Control type="text" placeholder="Please Enter Last Name" name="last_name" maxLength="100" value={lastName} onChange={handleLastNameChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formEmail">
            <Form.Label>{emailDisplay}</Form.Label>
            <Form.Control type="text" placeholder="Please Enter Email" name="email" value={email} maxLength="100" onChange={handleEmailChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formPhone">
            <Form.Label>{phoneDisplay}</Form.Label>
            <Form.Control type="text" placeholder="Please Enter Phone Number" name="phone" value={phone} onChange={handlePhoneChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formInterpretingNeeded">
            <Form.Label>{interpreterQuestion}</Form.Label>
            <Form.Check type="Checkbox" id="interpreting_needed_yes" name="interpreting_needed" label={affirmative} checked={isChecked} onChange={handleCheckboxChange}/>
            {isChecked &&
              <div>
                <br />
                <Form.Control type="text" placeholder="Please Enter Language(s)" name="language" maxLength="100" value={language} onChange={handleLanguageChange} />
              </div>
            }
          </Form.Group>
          <br />
          <div className="text-center">
            <Button size="sm" variant="outline-primary" style={{ margin: "25px" }} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </Row>
    </div>
  );
}

export default NewApplicantForm;