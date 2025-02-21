function ApplicantParamCheck(applicantParams, param) {
  if (applicantParams === null) {
    return null
  } else {
    return applicantParams[`${param}`]
  };
}

export default ApplicantParamCheck;