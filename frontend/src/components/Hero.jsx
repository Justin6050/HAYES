import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Hayes Memorial Hospital is the Hospital of the Sam HigginBottom
            University of Agriculture,Technology and Sciences.This Hospital is
            dedicated to providing comprehensive healthcare services with
            compassion and expertise to the Staff and Students of the University. Our team of skilled professionals is
            committed to delivering personalized care tailored to each patient's
            needs. At Hayes, we prioritize your well-being, ensuring a
            harmonious journey towards optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
