function LinkRendering(capacity, id) {
  if (capacity) {
    return "/registration_sessions";
  } else {
    return `/registration_sessions/${id}/applicants/new`;
  }
}

export default LinkRendering;
