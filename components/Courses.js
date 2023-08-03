import React from "react";
import data from "../dataChildren";
import Card from "./Card";

export default function Courses() {
  const dataInfo =
    data &&
    data.map((item) => (
      <Card
        key={item.id}
        img={item.photo}
        title={item.title}
        desc={item.desc}
        exclusive={item.openSpace}
      />
    ));

  return (
    <div className="courses" id="services">
      <h1 className="heading">Next month special</h1>

      <section className="cards-list">{dataInfo}</section>
    </div>
  );
}
