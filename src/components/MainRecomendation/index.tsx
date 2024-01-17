import React from "react";
import './style.scss'
import MainImage from "../../assets/MainImageAlita.png";

class  MainRecomendation extends React.Component {
  render() {
    return (
      <main className="mainBanner">
      <h1>Alita: Battle Angel</h1>
      <img src={MainImage}  alt="walllpager serie"/>
      <section className="mainBanner__conteudo">
          <p>Abandoned in a scrapyard in Iron City, the cyborg Alita is discovered by the scientist Dyson Ido.
              Revitalized, she awakens with no memory and recognition of the world around her. Determined to uncover
              her past and explore her astonishing combat abilities, Alita becomes a formidable bounty hunter,
              battling deadly forces.
          </p>
      </section>
      <a href="#" className="watch-Now">View Now</a>

  </main>
    );
  }
}

export default MainRecomendation;