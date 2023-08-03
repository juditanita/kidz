import React from "react";

export default function TeacherCard(props) {
  return (
    <div className="contacts">
      <div className="contact-card">
        <h3>{props.name}</h3>
        <div className="info-group">
          <i class="sign ri-phone-fill"></i>
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <i class="sign ri-mail-line"></i>
          <p className="email">{props.email}</p>
        </div>
      </div>
    </div>
  );
}
