import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <p className="lead">
            Simply Sign in with your google Id and view your orders
          </p>
          <div className="buttons">
            <a href="/auth/google" className="btn btn-light">
              Login Using google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
