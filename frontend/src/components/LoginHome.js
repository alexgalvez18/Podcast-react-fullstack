import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button } from "antd";

class LoginHome extends Component {
  render() {
    return (
      <main>
        {/* <Navbar /> */}
        <div className="login">
          <h3> You are in!</h3>
          <Button type="primary">
            <Link to="/">GO HOME!</Link>
          </Button>
        </div>
      </main>
    );
  }
}

export default LoginHome;
