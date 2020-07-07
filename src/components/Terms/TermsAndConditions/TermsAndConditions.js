import React from "react";
import { Container, Header } from "semantic-ui-react";

import "./TermsAndConditions.scss";
import { Link } from "react-router-dom";

const termsAndConditions = () => {
  return (
    <Container className="TermsAndConditions">
      <Header.Content className="TermsAndConditions__Header">
        Terms and Conditions
      </Header.Content>
      <p className="TermsAndConditions__Paragraph">
        Connected Learning aims to create a respectful, understanding and kind
        space where people feel comfortable to ask questions and seek guidance
        and support. For information on this, please see our{" "}
        <Link to="/safer-spaces-policy">Safer Spaces Policy</Link>. Anyone in
        breach of the <Link to="/safer-spaces-policy">Safer Spaces Policy</Link>{" "}
        may have their access to the Connected Learning community revoked.
      </p>
      <p className="TermsAndConditions__Paragraph">
        Any content, logo or other visual media created by Maslaha on the
        Connected Learning website is the property of Maslaha, and is protected
        by copyright laws.
      </p>
      <p className="TermsAndConditions__Paragraph">
        Maslaha and Connected Learning are not responsible for any third-party
        websites that are linked to on our webpages. Users and volunteers are
        responsible for reading and agreeing (or disagreeing) with the Terms and
        Conditions or <Link to="/safer-spaces-policy">Privacy Policies</Link> of
        these third party websites.
      </p>
    </Container>
  );
};

export default termsAndConditions;
