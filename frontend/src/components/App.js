import React, { Component } from "react";
import Navbar from "./Navbar";
import LastEpisode from "./LastEpisode";
import EpisodeList from "./EpisodeList";
import Suscribe from "./Suscribe";
import NominaInvitado from "./NominaInvitado";
import Contacto from "./Contacto";
import { Layout } from "antd";

class App extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Layout.Header>
            <Navbar />
          </Layout.Header>
          {/* <Layout.Content className="content" /> */}
          <LastEpisode />
          <EpisodeList tagline="Ultimo epi" />
          <Suscribe />
          <NominaInvitado />

          <Layout.Footer>
            <Contacto />
          </Layout.Footer>
        </div>
      </Layout>
    );
  }
}

export default App;
