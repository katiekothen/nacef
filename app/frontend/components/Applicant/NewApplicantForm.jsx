import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card, Row } from "react-bootstrap";
import NewApplicantFormError from '../RegistrationSession/Common/NewApplicantFormError';
import ApplicantParamCheck from '../RegistrationSession/Common/ApplicantParamCheck';
import UserHeaderUI from '~/components/RegistrationSession/UserHeaderUI.jsx';

function NewApplicantForm(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const registrationSessionID = document.getElementById("data").getAttribute("registrationSessionID");
  const locale = document.getElementById("locale").getAttribute("content");
  const mobile = document.getElementById("data").getAttribute("mobile");
  const errors = JSON.parse(document.getElementById("data").getAttribute("errors"));
  const applicantParams = JSON.parse(document.getElementById("data").getAttribute("applicantParams"));
  const firstNameDisplay = document.getElementById("first_name").getAttribute("content");
  const firstNamePlaceholder = document.getElementById("first_name_placeholder").getAttribute("content");
  const lastNameDisplay = document.getElementById("last_name").getAttribute("content");
  const lastNamePlaceholder = document.getElementById("last_name_placeholder").getAttribute("content");
  const emailDisplay = document.getElementById("email").getAttribute("content");
  const emailPlaceholder = document.getElementById("email_placeholder").getAttribute("content");
  const phoneDisplay = document.getElementById("phone").getAttribute("content");
  const phoneNumberPlaceholder = document.getElementById("phone_number_placeholder").getAttribute("content");
  const interpreterQuestion = document.getElementById("interpreter_question").getAttribute("content");
  const affirmative = document.getElementById("affirmative").getAttribute("content");
  const languageDisplay = document.getElementById("language").getAttribute("content");
  const interpretingNote = document.getElementById("interpreting_note").getAttribute("content");
  const referenceQuestion = document.getElementById("reference_question").getAttribute("content");
  const firstOption = document.getElementById("first_option").getAttribute("content");
  const secondOption = document.getElementById("second_option").getAttribute("content");
  const thirdOption = document.getElementById("third_option").getAttribute("content");
  const other = document.getElementById("other").getAttribute("content");
  const topMessage = document.getElementById("top_message").getAttribute("content");
  const submit = document.getElementById("submit").getAttribute("content");
  const [firstName, setFirstName] = useState(ApplicantParamCheck(applicantParams, "first_name") || "");
  const [lastName, setLastName] = useState(ApplicantParamCheck(applicantParams, "last_name") || "");
  const [email, setEmail] = useState(ApplicantParamCheck(applicantParams, "email") || "");
  const [phone, setPhone] = useState(ApplicantParamCheck(applicantParams, "phone")|| "");
  const [isChecked, setIsChecked] = useState(false);
  const [language, setLanguage] = useState(ApplicantParamCheck(applicantParams, "language") || "");
  const [referral, setReferral] = useState(ApplicantParamCheck(applicantParams, "referral") || "Arapahoe Libraries website or staff member");
  let width = "4%"


  let textDirection = "ltr"
  const interpretationNeeded = {
    false: false,
    true: true
  }

  if (locale === "ar") {
    textDirection = "rtl"
  }

  if (mobile === "true") {
    width = "10%"
  }


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

  const handleReferralChange = (event) => {
    setReferral(event.target.value);
  };

  return (
    <div>{UserHeaderUI(props.admin)}
    <Row style={{ height: "95vh", direction: textDirection }}>
      {NewApplicantFormError(errors)}
      <Card className="card mx-auto my-auto" style={{ width: "80%" }}>
        <Card.Title className="text-center" style={{ marginTop: "25px", marginBottom: "20px" }}>
          {topMessage}
        </Card.Title>
        <Form action={uri} method="post">
          <input type="hidden" name="authenticity_token" value={csrf_token} />
          <input type="hidden" name="locale" value={locale} />
          <input type="hidden" name="interpretation_needed" value={interpretationNeeded[isChecked]} />
          <Form.Group controlId="formFirstName">
            <Form.Label>{firstNameDisplay}</Form.Label>
            <Form.Control type="text" placeholder={firstNamePlaceholder} name="first_name" maxLength="100" value={firstName} onChange={handleFirstNameChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formLastName">
            <Form.Label>{lastNameDisplay}</Form.Label>
            <Form.Control type="text" placeholder={lastNamePlaceholder} name="last_name" maxLength="100" value={lastName} onChange={handleLastNameChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formEmail">
            <Form.Label>{emailDisplay}</Form.Label>
            <Form.Control type="text" placeholder={emailPlaceholder} name="email" value={email} maxLength="100" onChange={handleEmailChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formPhone">
            <Form.Label>{phoneDisplay}</Form.Label>
            <Form.Control type="text" placeholder={phoneNumberPlaceholder} name="phone" value={phone} onChange={handlePhoneChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formInterpretingNeeded">
            <Form.Label>{interpreterQuestion}</Form.Label>
            <Form.Check type="Checkbox" id="interpreting_checkbox" style={{ width: width}} name="interpreting_checkbox" label={affirmative} checked={isChecked} onChange={handleCheckboxChange}/>
            {isChecked &&
              <div>
                <br />
                <Form.Control type="text" placeholder={languageDisplay} name="language" maxLength="100" value={language} onChange={handleLanguageChange} />
                <br />
                {interpretingNote}
              </div>
            }
          </Form.Group>
          <br />
          <Form.Group controlId="referral">
            <Form.Label>{referenceQuestion}</Form.Label>
            <Form.Select name="referral" value={referral} onChange={handleReferralChange}>
              <option value="Arapahoe Libraries website or staff member">{secondOption}</option>
              <option value="English class at Arapahoe Libraries">{firstOption}</option>
              <option value="Local organization">{thirdOption}</option>
              <option value="Other">{other}</option>
            </Form.Select>
          </Form.Group>
          <br />
          <div className="text-center">
            <Button size="sm" variant="outline-primary" style={{ margin: "25px" }} type="submit">
              {submit}
            </Button>
          </div>
        </Form>
      </Card>
    </Row>
    </div>
  );
}

export default NewApplicantForm;