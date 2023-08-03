import React from "react";

export default function Card(props) {
  function infoBtn() {
    console.log("it is clicked");
  }
  const remainingPlace = 10 - props.exclusive;

  return (
    <div key={props.id} className="card">
      <p className="card-title">{props.title}</p>
      <div className="card-body">
        <img src={props.img} alt="" className="card--image" />
        <p className="card-desc">{props.desc}</p>
      </div>

      <div onClick={infoBtn} className="card-footer">
        {props.exclusive === 0 && <p className="card-extra">FULL</p>}

        {remainingPlace > 0 && remainingPlace != 10 && (
          <a href="#contactMes" className="book">
            Book Now
          </a>
        )}
      </div>
    </div>
  );
}
