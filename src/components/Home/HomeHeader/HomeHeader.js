import React, { Component } from "react";
import { Container, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./HomeHeader.scss";
import HeaderImage from "assets/header.png";
import Aux from "../../../hoc/Aux";

export class HomeHeader extends Component {
  render() {
    return (
      <Aux>
        <Container textAlign="center" className="Home__Paragraph">
          <Image src={HeaderImage} fluid />
          <p>
            Connected Learning is an online platform for parents and carers to
            get one-to-one advice to support their child’s learning at home.
          </p>
          <p>
            With schools closed, being in charge of your child’s education can
            feel overwhelming! Through Connected Learning we invite parents and
            carers to ask any questions that might help you support your child’s
            learning and wellbeing during this time.
          </p>
          <p>
            Volunteer mentors include teachers, wellbeing and tech experts and
            other parents! Importantly we also offer support in different
            languages
            {/*             Parents who don’t have access to the internet can text in support requests */}{" "}
            - see our contact page <Link to="/contact">here</Link> for details.
          </p>
        </Container>
        <Container textAlign="center" className="HomeHeader">
          <Button.Content
            content="Ask for Help"
            as={Link}
            to="/volunteer-with-us"
            className="Home__Button"
          />
          <Button.Content
            content="Offer Help"
            as={Link}
            to="/volunteer-with-us"
            className="Home__Button"
          />
        </Container>
      </Aux>
    );
  }
}
