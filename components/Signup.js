import React from "react";

export default function SignUp() {
  return (
    <section className="container-signUp">
      <h3 className="title">Sign up to our newsletter</h3>
      <div className="email-content">
        <form>
          <input
            type="email"
            placeholder="enter your email"
            className="signUpInput"
          />
          <button type="submit" className="btn subscribe">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
