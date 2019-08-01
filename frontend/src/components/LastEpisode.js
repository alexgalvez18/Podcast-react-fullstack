import React, { Component } from "react";
import { Button } from "antd";

class LastEpisode extends Component {
  render() {
    return (
      <main>
        <div className="lastEpisode">
          <img src="alanaLogo.png" alt="Alana" className="imagenesAnteriores" />

          <h3>
            <b>Ignacio Martinez </b>fundador de Alana
          </h3>
          <audio src="pruebaAlanaElon.mp3" controls />
          <p className="parrafo">
            <h4>
              Ignacio nos platica algunos de los retos para construir una
              empresa y como por fin esta disfrutando de algunos frutos al ser
              aceptado en una de las aceleradoras más reconocidas del mundo.
            </h4>
          </p>

          <Button type="primary" className="button3">
            Suscribirse
          </Button>
          <Button type="primary" className="parrafo">
            Compartir
          </Button>
        </div>
      </main>
    );
  }
}

export default LastEpisode;
