import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Fare from "./components/Fare";
import About from "./components/About";
import Teachers from "./components/Teachers";
import SignUp from "./components/Signup";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <About />
      <Courses />

      <Teachers />
      <SignUp />
      <Fare />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
