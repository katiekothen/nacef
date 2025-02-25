import React, { useState } from 'react';
import {Button, Navbar, Form, Row, Col} from 'react-bootstrap';
import { CSVLink } from "react-csv";


function UserHeaderUI(userType, registrationSessionCSVData, applicantsCSVData) {
  const token = document.head.getElementsByTagName('meta')[2].content;
  const currentPageLanguage = window.location.pathname.split("/")[1]
  const [displayLanguage, setDisplayLanguage] = useState(currentPageLanguage)

  const handleDisplayLanguageChange = (event) => {
    setDisplayLanguage(event.target.value);
    toggleLanguage(event.target.value);
  };

  const toggleLanguage = (value) => {
    const currentURL = window.location.pathname;
    const currentURLParts = currentURL.split("/")
    if (currentURLParts[1] != "registration_sessions") {
      currentURLParts[1] = value
    } else {
      currentURLParts[0] = value
    };
    const newURL = currentURLParts.join("/")
    window.location.pathname = newURL
  }

  if (userType === "admin") {
    return (<Navbar className="bg-body-tertiary justify-content-between"> <div /> <div> &emsp; &emsp; &emsp; &emsp; <a href={"/admin/registration_sessions"}>Registration Session Index</a> &emsp; <a href={"/admin/registration_sessions/new"}>New Registration Session</a> &emsp; <CSVLink data={registrationSessionCSVData || '{}'} filename={"registration_sessions"}>Registration Sessions CSV file</CSVLink> &emsp; <CSVLink data={applicantsCSVData || '{}'} filename={"applicants"}>Applicants CSV file</CSVLink></div> <div>
      <form action='/logout' method="post">
      <input type="hidden" name="authenticity_token" value={token} />
      <input type="hidden" name="_method" value="DELETE" />
      <Button variant="outline-danger" type="submit" > Logout </Button>
      </form>
      </div>
      </Navbar>)
  } else {
    return (
      <Row>
        <Col>
        </Col>
        <Col xs="auto">
          <Form.Select aria-label="language selection" value={displayLanguage} onChange={value => handleDisplayLanguageChange(value)}>
            <option value="en">English</option>
            <option value="es">español</option>
            <option value="ru">русский</option>
            <option value="ar">العربية</option>
          </Form.Select>
        </Col>
      </Row>
    )
  }
  //send values as params to backend via on change and link?
}

export default UserHeaderUI;
