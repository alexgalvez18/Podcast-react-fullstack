import React, { Component } from "react";

class NominaInvitado extends Component {
  render() {
    return (
      <div>
        Quieres escuchar una entrevista con alguien en particular?? Nominalo
        <form action="submit">
          <input type="text" name="email" placeholder="Nomina a alguien" />
          <input type="submit" defaultValue="Vota" />
        </form>
      </div>
    );
  }
}

export default NominaInvitado;
