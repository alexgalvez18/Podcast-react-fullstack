import React, { Component } from "react";

class EpisodeList extends Component {
  render() {
    return (
      <main className="episodeList">
        <div>
          <img
            src="cuantoLogo.png"
            alt="Cuanto"
            className="imagenesAnteriores"
          />
          <h3>
            <b>Felipe Echandi</b> fundador de Cuanto
          </h3>
          <audio src="pruebaAlanaElon.mp3" controls />
          <p>
            <h4>Aplicación para recibir pagos en linea</h4>
          </p>
        </div>
        <div>
          <img
            src="prescrypto.png"
            alt="Prescrypto"
            className="imagenesAnteriores"
          />
          <h3>
            <b>Everardo Barojas</b> fundador de Prescrypto
          </h3>
          <audio src="pruebaAlanaElon.mp3" controls />
          <p>
            <h4>Recetario medico basado en blockchain.</h4>
          </p>
        </div>
        <div>
          <img src="fintual.png" alt="Fintual" className="imagenesAnteriores" />
          <h3>
            <b>Pedro Pineda</b> fundador de Fintual.
          </h3>
          <audio src="pruebaAlanaElon.mp3" controls />
          <p>
            <h4>Un Roboadvisor para Latam.</h4>
          </p>
        </div>
      </main>
    );
  }
}

export default EpisodeList;
