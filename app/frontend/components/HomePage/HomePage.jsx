import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeaderUI from '~/components/RegistrationSession/UserHeaderUI.jsx';

function HomePage(props) {
  const locale = document.getElementById("locale").getAttribute("content");
  console.log(locale)
  const firstParagraph = document.getElementById("first_paragraph").getAttribute("content");
  return (
    <div>
      {UserHeaderUI(props.admin)}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "absolute", top: "35%" }}>
        <p style={{ textAlign: "center" }}>{firstParagraph}</p>
        <p style={{ textAlign: "center" }}>Each prospective student may register for only one registration session.</p>
        <p style={{ textAlign: "center" }}>Click <a href={`/${locale}/registration_sessions`}>here</a> to see a list of registration sessions to choose from. </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
