import React from 'react';

const Hero = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://www.youtube.com/';
  };

  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>
        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>
        <div className="buttons">
          <button>Start Your Journey</button>
          <button>
  <a href="Resume Format 2 (1).docx" download="Resume Format 2 (1).docx">Discover Options</a>
</button>

        </div>
      </div>
    </section>
  );
};

export default Hero;
