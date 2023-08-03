import React from "react";
import aboutImg from "../assets/image/aboutwomen.png";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src={aboutImg} alt="women" />
      </div>

      <div className="content">
        <h3>a word about us</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae qui
          exercitationem repellendus distinctio molestias nostrum necessitatibus
          totam delectus incidunt quia dignissimos, quis, error ut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae iste
          adipisci ipsum maiores. Corrupti minima vitae iure temporibus, id ea?
        </p>
        <button href="#" className="btn">
          Read More
        </button>
      </div>
    </section>
  );
}
