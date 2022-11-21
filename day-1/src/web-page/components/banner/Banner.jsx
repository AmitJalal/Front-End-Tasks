import "./b.css";
import DemonSlayer from "../../assets/demon-slayer.jpeg";
import Nezuko from '../../assets/nezuko.jpg'
import React from "react";

const Banner = () => {
  return (
    <div className="container">
      <section className="left">
        <div className="banner-heading">
          <h1>DEMON SLAYER</h1>

          <ul>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum. </li>
          </ul>
        </div>

        <img src={DemonSlayer} alt="" />

      </section>
      <section className="right">
        <ul>
          <li>abcdefg higj</li>
          <li>abcdef</li>
        </ul>
        <span>
          <img src={Nezuko} alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            quisquam, ea labore maxime, repudiandae corporis illo, odit
            doloremque nobis inventore officiis dolor omnis corrupti
            consequuntur aspernatur tempore totam similique aliquam.
          </p>
        </span>
      </section>
    </div>
  );
};

export default Banner;
