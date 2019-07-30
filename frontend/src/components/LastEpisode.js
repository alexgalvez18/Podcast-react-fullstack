import React, { Component } from "react";
import { Button } from "antd";

class LastEpisode extends Component {
  render() {
    return (
      <div className="lastEpisode">
        <img src="alanaLogo.png" alt="Alana" />
        <h3>Ignacio Martinez, fundador y Ceo de Alana</h3>
        <audio src="pruebaAlanaElon.mp3" controls />
        <p>
          Ignacio nos platica de los retos que ha tenido construir una empresa y
          como ahora por fin esta disfrutando de algunos frutos al ser aceptado
          en una de las aceleradoras más reconocidas del mundo
        </p>

        <Button type="danger">Suscribirse</Button>
        <Button type="danger">Compartir</Button>
      </div>
    );
  }
}

export default LastEpisode;
