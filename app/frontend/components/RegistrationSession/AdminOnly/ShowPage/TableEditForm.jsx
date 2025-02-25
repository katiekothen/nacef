import React from 'react';

const TableEditForm = (registrationSession, formValue, csrf_token) => {
  return (
    <form id="editForm" action={`/admin/registration_sessions/${registrationSession.id}/applicants/${formValue.applicantID}`} method="post">
      <input type="hidden" name="authenticity_token" value={csrf_token} />
      <input type="hidden" name="_method" value="PATCH" />
      <input type="hidden" name="first_name" value={formValue.firstName} />
      <input type="hidden" name="last_name" value={formValue.lastName} />
      <input type="hidden" name="email" value={formValue.email} />
      <input type="hidden" name="phone" value={formValue.phone} />
      <input type="hidden" name="language" value={formValue.interpreting} />
      <input type="hidden" name="language" value={formValue.language} />
      <input type="hidden" name="language" value={formValue.referrer} />
    </form>
  );
};

export default TableEditForm;
