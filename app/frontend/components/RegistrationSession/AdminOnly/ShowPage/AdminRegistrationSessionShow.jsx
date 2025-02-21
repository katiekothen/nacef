import React, { useState } from 'react';
import DeleteConfirmation from '~/components/RegistrationSession/Common/Modals/DeleteConfirmation.jsx';
import ShowRegistrationSessionCard from '~/components/RegistrationSession/AdminOnly/ShowPage/ShowRegistrationSessionCard.jsx';
import RegisteredApplicants from '~/components/RegistrationSession/AdminOnly/ShowPage/RegisteredApplicants.jsx';

function AdminRegistrationSessionShow() {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const registrationSession = JSON.parse(document.getElementById("data").getAttribute("registrationSession"));
  const applicants = JSON.parse(document.getElementById("data").getAttribute("applicants"));
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deletePath, setDeletePath] = useState(null);
  const [rowEdit, setRowEdit] = useState(false);

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    language: "",
    rowID: null,
    applicantID: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };

  return (
    <div style={{ height: "95vh" }}>
      <div id='printable' style={{ height: "95vh" }}>
        {ShowRegistrationSessionCard(
          registrationSession,
          applicants,
          setDeletePath,
          setDeleteMessage,
          setDisplayConfirmationModal
        )}
        {RegisteredApplicants(
          applicants,
          rowEdit,
          registrationSession,
          formValue,
          csrf_token,
          handleChange,
          setRowEdit,
          setFormValue,
          setDeletePath,
          setDeleteMessage,
          setDisplayConfirmationModal
        )}
      </div>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        path={deletePath}
        message={deleteMessage}
        authenticity={csrf_token}
      />
    </div>
  );
}

export default AdminRegistrationSessionShow;
