function LinkRendering(capacity, id, locale) {
  if (capacity) {
    return `/${locale}/registration_sessions`;
  } else {
    return `/${locale}/registration_sessions/${id}/applicants/new`;
  }
}

export default LinkRendering;
