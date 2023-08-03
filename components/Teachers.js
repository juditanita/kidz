import React from "react";
import teacherPhot from "../assets/image/teachers.png";
import TeacherCard from "./TeacherCard";
import contact from "../contact";

export default function Teachers() {
  const contactElement =
    contact &&
    contact.map((item) => (
      <TeacherCard
        key={item.id}
        name={item.fullName}
        phone={item.phoneNumber}
        email={item.email}
      />
    ));

  return (
    <section className="teacher" id="teacher">
      <h3 className="teacher-title">Our amazing Teachers</h3>

      <div className="image">
        <img src={teacherPhot} alt="teachers" />
      </div>
      <div>{contactElement}</div>
    </section>
  );
}
