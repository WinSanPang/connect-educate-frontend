import React from "react";
import { Image } from "semantic-ui-react";
import "./Footer.scss";
import Maslaha from "../../../assets/maslaha-logo-white.png";
import { Link } from "react-router-dom";

const footer = (props) => {
  if (props.hideFooter) {
    return null;
  }

  return (
    <div>
      <div className="Footer">
        <p className="Footer__Paragraph">Connected Learning is created by...</p>
        <Image src={Maslaha} floated="right" size="medium" />
      </div>
      <div className="Footer__Terms">
        <Link to="/terms-conditions">Terms and Conditions</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/safer-space-policy">Safer Space Policy</Link>
      </div>
    </div>
  );
};

export default footer;
