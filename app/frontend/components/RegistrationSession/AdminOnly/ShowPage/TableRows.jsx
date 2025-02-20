import React from 'react';
import { Button } from "react-bootstrap";
import ShowDeleteModal from '~/components/RegistrationSession/Common/Modals/ShowDeleteModal.jsx';
import { Trash, Pencil } from "react-bootstrap-icons";
import { MDBInput } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from "@fortawesome/free-regular-svg-icons";

function TableRows(rowEdit, formValue, applicant, index, handleChange, registrationSession, setRowEdit, setFormValue, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) {
  function clickToEditRow(applicant, index) {
    setRowEdit(!rowEdit);
    setFormValue({
      firstName: applicant.first_name,
      lastName: applicant.last_name,
      email: applicant.email,
      phone: applicant.phone,
      language: applicant.language,
      rowID: index,
      applicantID: applicant.id
    });
  }

  if (rowEdit === true && formValue.rowID === index) {
    return (
      <tr id={index} key={index}>
        <td className="text-center align-middle">{index + 1}</td>
        <td><MDBInput name="firstName" className="text-center align-middle" type='text' onChange={handleChange} value={formValue.firstName}></MDBInput></td>
        <td><MDBInput name="lastName" className="text-center align-middle" type='text' onChange={handleChange} value={formValue.lastName}></MDBInput></td>
        <td><MDBInput name="email" className="text-center align-middle" type='text' onChange={handleChange} value={formValue.email}></MDBInput></td>
        <td><MDBInput name="phone" className="text-center align-middle" type='text' onChange={handleChange} value={formValue.phone}></MDBInput></td>
        <td><MDBInput name="language" className="text-center align-middle" type='text' onChange={handleChange} value={formValue.language}></MDBInput></td>
        <td>
          <Button name="pen" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => clickToEditRow(applicant, index)}> <Pencil color="blue" /> </Button>
          <Button name="save" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} type="submit" form={"editForm"}> <FontAwesomeIcon icon={faSave} color="blue" /> </Button>
          <Button name="trash" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => ShowDeleteModal(applicant, applicant.id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, registrationSession)}> <Trash color="red" /> </Button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr id={index} key={index} >
        <td className="text-center align-middle" style={{ padding: "0px" }}>{index + 1}</td>
        <td className="text-center align-middle" style={{ padding: "0px" }}>{applicant.first_name}</td>
        <td className="text-center align-middle" style={{ padding: "0px" }}>{applicant.last_name}</td>
        <td className="text-center align-middle" style={{ padding: "0px" }}>{applicant.email}</td>
        <td className="text-center align-middle" style={{ padding: "0px" }}>{applicant.phone}</td>
        <td className="text-center align-middle" style={{ padding: "0px" }}>{applicant.language}</td>
        <td className="text-center align-middle" style={{ padding: "0px" }}>
          <Button name="pen" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => clickToEditRow(applicant, index)}> <Pencil color="blue" /> </Button>
          <Button name="save" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} disabled={true}> <FontAwesomeIcon icon={faSave} color="lightgrey" /> </Button>
          <Button name="trash" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => ShowDeleteModal(applicant, applicant.id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, registrationSession)}> <Trash color="red" /> </Button>
        </td>
      </tr>
    );
  }
}

export default TableRows;
