import React, { Component } from "react";
import Navbar from "./Navbar";
import LastEpisode from "./LastEpisode";
import EpisodeList from "./EpisodeList";
import Suscribe from "./Suscribe";
import NominaInvitado from "./NominaInvitado";
import { Layout, Button } from "antd";

class App extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Layout.Header className="navbar">
            <Navbar />
          </Layout.Header>

          <div className="textoMedio">
            <b>Última entrevista</b>
          </div>

          <LastEpisode />
          <div className="textoMedio">
            <b>Entrevistas anteriores</b>
          </div>
          <EpisodeList tagline="Ultimo epi" />
          <NominaInvitado />
          <Suscribe />

          <Layout.Footer className="contacto2">
            <div className="contacto">
              <Button type="primary"> Contactanos </Button>
            </div>
          </Layout.Footer>
        </div>
      </Layout>
    );
  }
}

export default App;
