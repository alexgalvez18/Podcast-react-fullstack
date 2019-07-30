import React, { Component } from "react";

class EpisodeList extends Component {
  render() {
    return (
      <main className="episodeList">
        <div>
          <img src="" alt="Alana" />
          <h3>Episodio -1</h3>
          <audio src="pruebaAlanaElon.mp3" controls />
          <p>res Ipso</p>
        </div>
        <div>
          <img src="" alt="Alana" />
          <h3>Episodio -2</h3>
          <audio src="pruebaAlanaElon.mp3" controls />
          <p>res Ipso</p>
        </div>
        <div>
          <img src="" alt="Alana" />
          <h3>Episodio -3</h3>
          <audio src="pruebaAlanaElon.mp3" controls />
          <p>res Ipso</p>
        </div>
      </main>
    );
  }
}

export default EpisodeList;
