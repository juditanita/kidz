import React from "react";
import logo from "../assets/image/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <p className="copyright">Kidz © {currentYear} --All right Reserved.</p>
    </footer>
  );
}
