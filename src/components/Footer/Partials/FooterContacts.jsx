import React from "react";
import "../Footer.css";

function FooterContacts(props) {
  return (
    <div>
      <div className="footerContent">
        <h3>{props.title}</h3>
        <ul>
          <li>{props.link1}</li>
          <li>{props.link2}</li>
          <li>{props.link3}</li>
          <li>{props.link4}</li>
          <li>{props.link5}</li>
          <li>{props.link6}</li>
          <li>{props.link7}</li>
          <li>{props.link8}</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterContacts;
