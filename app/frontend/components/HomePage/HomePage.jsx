import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeaderUI from '~/components/RegistrationSession/UserHeaderUI.jsx';

function HomePage(props) {
  const locale = document.getElementById("locale").getAttribute("content");
  const here = document.getElementById("here").getAttribute("content");
  const firstMessage = document.getElementById("first_message").getAttribute("content");
  const secondMessage = document.getElementById("first_message").getAttribute("content");
  const link = <a href={`/${locale}/registration_sessions`}>{here}</a>
  return (
    <div>
      {UserHeaderUI(props.admin)}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "absolute", top: "35%" }}>
        <p style={{ textAlign: "center" }}>{firstMessage} {link} {secondMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
