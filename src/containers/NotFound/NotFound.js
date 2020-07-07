import React from "react";
import { Header, Container } from "semantic-ui-react";

import "./NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="NotFound">
      <Header as="h1" className="NotFound__Header">
        Page not Found :(
      </Header>
      <Header.Subheader className="NotFound__Paragraph">
        Sorry - this page cannot be found. Please click <Link to="/">here</Link>{" "}
        to go back to the homepage
      </Header.Subheader>
    </Container>
  );
};

export default NotFound;
