import React from "react";
import { Container, Header, Grid, Image } from "semantic-ui-react";

import "./HomeResources.scss";
import GamesDiscovery from "../../../assets/games-discovery.png";
import LearnThroughPlay from "../../../assets/learn-play.png";
import Tech from "../../../assets/tech.png";
import { Link } from "react-router-dom";

const homeResourcesStyling = { marginTop: "5%", color: "black" };

const HomeResources = () => (
  <Container textAlign="center">
    <Header.Content className="HomeResources__Subheading">
      Popular Resources
    </Header.Content>
    <Container className="HomeResources__Paragraph">
      We know it can be hard to know what activities or learning materials to
      use with your child, so we've listed a few to help get you started. See
      our Resources page <Link to="/resources">here</Link> for the full list!
    </Container>
    <Grid stackable columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Image
            src={LearnThroughPlay}
            style={{
              textAlign: "center",
              display: "inline",
              width: "43%",
            }}
          />
          <Header as="h2" icon className="Home__Teal">
            Learn Through Play
            <Header.Subheader style={homeResourcesStyling}>
              Click{" "}
              <a
                href="https://bradford.50thingstodo.org/app/os#!/50-things-to-do-before-youre-five"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              for a list of 50 activities for under 5’s that you can easily do
              around the house.
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Image
            src={GamesDiscovery}
            style={{
              textAlign: "center",
              display: "inline",
              padding: "4%",
              width: "70%",
            }}
          />
          <Header as="h2" icon className="Home__Teal">
            Games and Discovery
            <Header.Subheader style={homeResourcesStyling}>
              Click{" "}
              <a
                href="https://www.bbc.co.uk/bitesize/collections/primary-games/1"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              to play games and practice Maths, English and Science, or let your
              child’s imagination go outta space with{" "}
              <a
                href="https://www.nasa.gov/kidsclub/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nasa's Kids Club
              </a>
              .
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Image
            src={Tech}
            style={{
              textAlign: "center",
              display: "inline",
              padding: "4%",
              width: "36%",
            }}
          />
          <Header as="h2" icon className="Home__Teal">
            Trouble with Tech?
            <Header.Subheader style={homeResourcesStyling}>
              Having trouble with technology? Click{" "}
              <a
                href="https://www.youtube.com/watch?v=QOUwumKCW7M"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              for a guide on how to use Zoom or find out how to use Google
              Classroom{" "}
              <a
                href="https://www.youtube.com/watch?v=2Iowi-gmbys"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              . Or get in touch with one of our mentors!
            </Header.Subheader>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default HomeResources;
