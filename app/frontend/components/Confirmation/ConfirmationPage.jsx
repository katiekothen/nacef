import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeaderUI from '~/components/RegistrationSession/UserHeaderUI.jsx';

function ConfirmationPage(props) {
  const name = document.getElementById("name").getAttribute("content");
  const locale = document.getElementById("locale").getAttribute("content");
  const firstPart = document.getElementById("first_part").getAttribute("content");
  const time = document.getElementById("time").getAttribute("content");
  const thirdPart = document.getElementById("third_part").getAttribute("content");
  const libraryName = document.getElementById("library_name").getAttribute("content");
  const fourthPart = document.getElementById("fourth_part").getAttribute("content");
  const location = document.getElementById("location").getAttribute("content");
  const lastPart = document.getElementById("last_part").getAttribute("content");
  let textDirection = "ltr"
  if (locale === "ar") {
    textDirection = "rtl"
  }
  const locationMapLinkDictionary = {
    "Eloise May": "https://goo.gl/maps/SCNgdrXSaN9SoVHt5",
  };

  // Split the dictionary to its own part for ease of set up

  return (
    <div>
    {UserHeaderUI(props.admin, {}, {})}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", direction: textDirection}}>
        <h3 style={{ position: "absolute", top: "27%" }}>Request Received</h3>
        <div style={{ position: "absolute", top: "35%" }}>
          <p style={{ textAlign: "center" }}>
            {firstPart} {name}{thirdPart} {time} {fourthPart}{' '}
            <a href={`${locationMapLinkDictionary[location]}`}>{libraryName}</a> {lastPart}
          </p>
          <br />
          <p style={{ textAlign: "center" }}> <b><u>Please take a screenshot or save this page as a pdf for future reference in case it's needed.</u></b></p>
          <br />
          <p style={{ textAlign: "center" }}>
            Click <a href={`/${locale}/registration_sessions`}>here</a> to return to the list of registration sessions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
