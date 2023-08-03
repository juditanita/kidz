import React from "react";

export default function Contact() {
  return (
    <section className="container-contact" id="contactMes">
      <div className="container-main">
        <div className="content-cont">
          <div className="left-side">
            <div className="address details">
              <i className="ri-map-pin-line"></i>
              <h5 className="topic">Address</h5>
              <p className="text-one">New York</p>
              <p className="text-two">Street 3, 23456</p>
            </div>

            <div className="phone details">
              <i className="ri-phone-line"></i>
              <h5 className="topic">Phone</h5>
              <p className="text-one">+987-345-234</p>
              <p className="text-two">+987-345-234</p>
            </div>

            <div className="email details">
              <i className="ri-mail-line"></i>
              <h5 className="topic">Email</h5>
              <p className="text-one">infokidz@hotmail.com</p>
              <p className="text-two">infokiddie@hotmail.com</p>
            </div>
          </div>

          <div className="right-side">
            <p className="topic-text">Send Us a message</p>
            <form>
              <div className="input-box">
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter email" />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Enter text" />
              </div>

              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
