function ShowDeleteModal(type, id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, registrationSession = null) {
  if (registrationSession === null) {
    setDeletePath(`/admin/registration_sessions/${id}`);
    setDeleteMessage(`Are you sure you want to delete the registration session in ${type.location} on ${type.date} at ${type.start_time}`);
  } else {
    setDeletePath(`/admin/registration_sessions/${registrationSession.id}/applicants/${id}`);
    setDeleteMessage(`Are you sure you want to remove ${type.first_name} registered on ${registrationSession.date} at ${registrationSession.start_time}`);
  }
  setDisplayConfirmationModal(true);
}

export default ShowDeleteModal;
