import React, { Component } from "react";
import { isUserLoggedIn } from "helpers";
import { connect } from "react-redux";
import { userRemoveLogin } from "actions";
import { Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import capitalize from "../../../helpers/capitalize";

import "./NavigationMenu.css";

class NavigationMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  handleLogoutClick = (e, args) => {
    this.props.userRemoveLogin();
    this.handleItemClick(e, args);
  };

  render() {
    const { activeItem } = this.state;
    //where is the user????
    const { user } = this.props;
    console.log("USER", user);
    const links = ["resources", "about-us", "contact", "messages", "login"];

    return (
      <div className="NavigationMenu">
        <Menu stackable size="huge" borderless as={Link}>
          <Menu.Item as={Link} to="/" position="left">
            <Image
              style={{ height: "60px" }}
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
            />
          </Menu.Item>

          {links.map((link) => {
            switch (link) {
              case "login":
                return (
                  <Menu.Item
                    name={link}
                    active={activeItem === link}
                    onClick={this.handleLogoutClick}
                    as={Link}
                    to="/login"
                  >
                    {isUserLoggedIn() ? "Logout" : "Login"}
                  </Menu.Item>
                );
              case "messages":
                return isUserLoggedIn() ? (
                  <Menu.Item
                    name={link}
                    active={activeItem === link}
                    onClick={this.handleItemClick}
                    as={Link}
                    to={"/" + link}
                  >
                    {capitalize(link)}
                  </Menu.Item>
                ) : (
                  ""
                );

              default:
                return (
                  <Menu.Item
                    name={link}
                    active={activeItem === link}
                    onClick={this.handleItemClick}
                    as={Link}
                    to={"/" + link}
                  >
                    {capitalize(link)}
                  </Menu.Item>
                );
            }
          })}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { userRemoveLogin })(NavigationMenu);
