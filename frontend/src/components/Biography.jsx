import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Hayes Memorial Hospital is the Hospital of the Sam HigginBottom
            University of Agriculture,Technology and Sciences.This Hospital is
            dedicated to providing comprehensive healthcare services with
            compassion and expertise to the Staff and Students of the University. Our team of skilled professionals is
            committed to delivering personalized care tailored to each patient's
            needs. At Hayes, we prioritize your well-being, ensuring a
            harmonious journey towards optimal health and wellness
          </p>
          <p>Cashless HealthCare Provider for  Staff & Students of SHUATS</p>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            assumenda exercitationem accusamus sit repellendus quo optio dolorum
            corporis corrupti. Quas similique vel minima veniam tenetur
            obcaecati atque magni suscipit laboriosam! Veniam vitae minus nihil
            cupiditate natus provident. Ex illum quasi pariatur odit nisi
            voluptas illo qui ipsum mollitia. Libero, assumenda?
          </p>
          <p>Lorem ipsum dolor sit amet!</p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
