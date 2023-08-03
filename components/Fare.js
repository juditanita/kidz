import React from "react";

export default function Fare() {
  return (
    <section className="fees up-and-down" id="fees">
      <h1 className="heading">our pricing plans</h1>
      <div className="box-container">
        <div className="box">
          <h3>weekly</h3>
          <div className="price">
            <span>$</span>20
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            magnam rem harum, nostrum facilis labore excepturi dignissimos?
            Voluptatibus facere beatae quam quasi! Vero fugit molestias officiis
            quam, corrupti earum aliquid?
          </p>
          <button href="#" class="btn premium">
            select plan
          </button>
        </div>

        <div className="box">
          <h3>yearly</h3>
          <div className="price">
            <span>$</span>250
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            magnam rem harum, nostrum facilis labore excepturi dignissimos?
            Voluptatibus facere beatae quam quasi! Vero fugit molestias officiis
            quam, corrupti earum aliquid?
          </p>
          <button href="#" className="btn premium">
            select plan
          </button>
        </div>

        <div className="box">
          <h3>monthly</h3>
          <div className="price">
            <span>$</span>50
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            magnam rem harum, nostrum facilis labore excepturi dignissimos?
            Voluptatibus facere beatae quam quasi! Vero fugit molestias officiis
            quam, corrupti earum aliquid?
          </p>
          <button href="#" className="btn premium">
            select plan
          </button>
        </div>
      </div>
    </section>
  );
}
