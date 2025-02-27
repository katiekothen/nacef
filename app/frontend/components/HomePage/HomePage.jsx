import React from 'react';
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeaderUI from '~/components/RegistrationSession/UserHeaderUI.jsx';

function HomePage(props) {
  const locale = document.getElementById("locale").getAttribute("content");
  const here = document.getElementById("here").getAttribute("content");
  const firstMessage = document.getElementById("first_message").getAttribute("content");
  const secondMessage = document.getElementById("second_message").getAttribute("content");
  const homeTitle = document.getElementById("home_title").getAttribute("content");
  const location = document.getElementById("home_location").getAttribute("content");
  const locationLibrary = document.getElementById("home_library").getAttribute("content");
  const link = <a href={`/${locale}/registration_sessions`}>{here}</a>

  let textDirection = "ltr"
  if (locale === "ar") {
    textDirection = "rtl"
  }
  
  const locationMapLinkDictionary = {
    "Eloise May": "https://goo.gl/maps/SCNgdrXSaN9SoVHt5",
  };
  return (
    <div>
      {UserHeaderUI(props.admin)}
      <br />
      <br />
      <Card.Title style={{ textDecorationLine: "underline", fontSize: "28px", fontWeight: "bold", textAlign: "center", margin: "2%" }}>{homeTitle}</Card.Title>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", direction: textDirection }}>
        <div style={{ position: "absolute", top: "35%" }}>
        <p style={{ textAlign: "center" }}>{firstMessage} {link} {secondMessage}</p>
        <br />
        <br />
        <p style={{ textAlign: "center" }}>{location}{' '}
          <a href={`${locationMapLinkDictionary[locationLibrary]}`}>{locationLibrary}</a>
        </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
