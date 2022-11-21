import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./crousel.css";

import Wanda from "../../assets/Wanda-Vision.jpg";
import SaeBaeyok from "../../assets/Sae-Baeyok.jpg";
import Sketch from "../../assets/sketch.jpg";

export default () => (
  <div className="main ">
    <Carousel autoPlay className="crousel">
      <div className="card">
        <img src={Wanda} />
      </div>
      <div className="card">
        <img src={SaeBaeyok} />
      </div>
      <div className="card">
        <img src={Sketch} />
      </div>
    </Carousel>
  </div>
);
