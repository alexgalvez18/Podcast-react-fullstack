import React, { Component } from "react";

import { Button } from "antd";

class LoginHome extends Component {
  render() {
    return (
      <main>
        {/* <Navbar /> */}
        <div className="login">
          <h3> You are in!</h3>
          <Button type="primary">
            <a href="https://fundadores.herokuapp.com/">Go HOME!</a>
          </Button>
        </div>
      </main>
    );
  }
}

export default LoginHome;
