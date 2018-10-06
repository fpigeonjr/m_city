import React, { Component } from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          background: "#98c5e9",
          boxShadow: "none",
          padding: "10px 0",
          borderBottom: "2px solid #00285e"
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }}>
            <div className="header_logo">LOGO </div>
          </div>

          <Link to="/team">
            <Button color="inherit">Team</Button>
          </Link>
          <Link to="/matches">
            <Button color="inherit">matches</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
