import React from "react";
import Photo from "../assets/image/hero_photos/2.png";
export default function Hero() {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1>Welcome to AfterSchool</h1>
        <h3>Better future for your kids</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor
          tellus vitae varius posuere. Nullam feugiat ante ut mattis fringilla.
          In quis nibh ultricies elit fermentum dictum. Quisque risus erat,
          accumsan eu felis eget, pulvinar vestibulum justo. Nam vel sem.
        </p>
        <button className="btn">Learn More</button>
      </div>
      <div className="image">
        <img src={Photo} alt="" className="img" />
      </div>
    </section>
  );
}
