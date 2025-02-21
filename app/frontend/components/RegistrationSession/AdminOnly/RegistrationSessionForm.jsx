import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card, Row } from 'react-bootstrap';
import UserHeaderUI from '~/components/RegistrationSession/UserHeaderUI.jsx';

function RegistrationSessionForm(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const registrationSessions = JSON.parse(document.getElementById("data").getAttribute("registrationSessions"));
  const allApplicants = JSON.parse(document.getElementById("data").getAttribute("allApplicants"));
  const [location, setLocation] = useState(props.location);
  const [schedule, setSchedule] = useState(props.schedule);
  const [applicants, setApplicants] = useState(props.applicants || 30);
  const method = props.method;
  const path = props.path;

  const handleScheduleChange = (newValue) => {
    setSchedule(newValue);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleApplicantsChange = (event) => {
    setApplicants(event.target.value);
  };

  function RenderField(method) {
    if (method === "patch") {
      return <input type="hidden" name="_method" value="PATCH" />;
    }
  }

  //tweak method above to take all caps so it can be reusable for patch and delete and split into own component

  return (
    <div>{UserHeaderUI(props.admin, registrationSessions, allApplicants)}
    <Row style={{ height: "95vh" }}>
      <Card className="card mx-auto my-auto" style={{ width: "40%" }}>
        <Card.Title style={{ marginTop: "25px", marginBottom: "20px" }} className="text-center">Please fill the form below:</Card.Title>
        <Form action={path} method="post">
          <input type="hidden" name="authenticity_token" value={csrf_token} />
          {RenderField(method)}
          <input type="hidden" name="location" value={location} />
          <input type="hidden" name="schedule" value={schedule} />
          <div id="location">
            <Form.Label>Location:</Form.Label>
            <Form.Select name="location" value={location} onChange={handleLocationChange}>
              <option value="Eloise May">Eloise May</option>
              <option value="Sheridan">Sheridan</option>
              <option value="Smoky Hill">Smoky Hill</option>
            </Form.Select>
          </div>
          <br />
          <div>
            <Form.Group className="mb-3" controlId="formApplicantLimit">
              <Form.Label>Maximum number of applicants:</Form.Label>
              <Form.Control type="number" placeholder="Enter applicant limit" name="applicant_limit" value={applicants} onChange={handleApplicantsChange} />
            </Form.Group>
          </div>
          <br />
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Please select a Date"
                  inputFormat="MM/dd/yyyy"
                  value={schedule}
                  onChange={handleScheduleChange}
                  slotProps={{ textField: { variant: 'outlined' } }}
                />
                <TimePicker
                  label="Please select a Start Time"
                  name="TimePicker"
                  value={schedule}
                  onChange={handleScheduleChange}
                  slotProps={{ textField: { variant: 'outlined' } }}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <br />
          <div className="text-center">
            <Button size="sm" variant="outline-primary" style={{ marginBottom: "25px" }} type="submit">Submit</Button>
          </div>
        </Form>
      </Card>
    </Row>
    </div>
  );
}

export default RegistrationSessionForm;
