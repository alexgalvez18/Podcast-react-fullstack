import React, { Component } from "react";
import { Button } from "antd";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="https://www.xylocapital.com/">
            <img src="XyloCapital.png" alt="Xylo" className="logo" />{" "}
          </a>
          <div className="navBord">
            <ul className="nav-links">
              <li className="nav-item">
                <Button type="primary">
                  <a href="hhttps://fundadores.herokuapp.com/">Home</a>
                </Button>
              </li>
              <li className="nav-item">
                <Button type="primary">Donde escuchar</Button>
              </li>
              <li className="nav-item">
                <Button type="primary">Recomienda Invitado</Button>
              </li>
              <li className="nav-item">
                <Button type="primary">
                  <a href="https://fundadores.herokuapp.com/signup">Signup</a>
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
