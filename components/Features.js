import React from "react";
import sepImage from "../assets/image/sunflower-sep.png";

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="box-container left">
        <h3 className="title">Why children Love Us</h3>
        <div className="box">
          <div className="info">
            <h3>Funny Conversations</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, impedit rem? Corrupti quidem praesentium ex cum
              sint voluptas molestiae neque!
            </p>
          </div>
        </div>
        <div className="box">
          <div className="info">
            <h3>Many activities</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, impedit rem? Corrupti quidem praesentium ex cum
              sint voluptas molestiae neque!
            </p>
          </div>
        </div>
        <div className="box">
          <div className="info">
            <h3>Activities non-stop</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, impedit rem? Corrupti quidem praesentium ex cum
              sint voluptas molestiae neque!
            </p>
          </div>
        </div>
      </div>
      <img src={sepImage} className="stick" alt="stick" />

      <div className="box-container right">
        <h3 className="title">Why Parents Choose Us</h3>
        <div className="box">
          <div className="info">
            <h3>Continues Monitoring</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, impedit rem? Corrupti quidem praesentium ex cum
              sint voluptas molestiae neque!
            </p>
          </div>
        </div>
        <div className="box">
          <div className="info">
            <h3>Professionalism teachers</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, impedit rem? Corrupti quidem praesentium ex cum
              sint voluptas molestiae neque!
            </p>
          </div>
        </div>
        <div className="box">
          <div className="info">
            <h3>Developed programs</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, impedit rem? Corrupti quidem praesentium ex cum
              sint voluptas molestiae neque!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
