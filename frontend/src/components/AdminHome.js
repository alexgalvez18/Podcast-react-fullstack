import React, { Component } from "react";
import Navbar from "./Navbar";
import Signup from "./Signup";

class AdminHome extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Signup />
      </main>
    );
  }
}

export default AdminHome;
