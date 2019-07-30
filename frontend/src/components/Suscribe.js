import React, { Component } from "react";
import { Button } from "antd";

class Suscribe extends Component {
  suscribeToNewsletter() {
    console.log("agrega el mail a la lista de correos");
  }

  render() {
    return (
      <div className="suscribe">
        <h3>Enterate de todas las noticias y nuevos episodios</h3>
        <form action="submit" onSubmit={this.suscribeToNewsletter}>
          <input type="text" name="email" placeholder="email" />

          <input type="submit" defaultValue="Suscribete" />
        </form>
      </div>
    );
  }
}

export default Suscribe;
