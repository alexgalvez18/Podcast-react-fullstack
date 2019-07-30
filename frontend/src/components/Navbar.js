import React, { Component } from "react";
import { Button } from "antd";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul className="nav-links">
            <li className="nav-item">
              <Button type="primary">Episodes</Button>
            </li>
            <li className="nav-item">
              <Button type="primary">Donde escuchar</Button>
            </li>
            <li className="nav-item">
              <Button type="primary">Recomienda Invitado</Button>
            </li>
            <li className="nav-item">
              <Button type="primary">Signup</Button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
