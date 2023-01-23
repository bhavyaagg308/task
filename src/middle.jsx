import "./middle.scss";
import React, { useState, useEffect } from "react";

const Middle = () => {
  let [x, setX] = useState(0);

  function handlePrev() {
    x === 0 ? setX(52) : setX((x -= 26));
  }

  function handleNext() {
    x === 52 ? setX(0) : setX((x += 26));
  }

  return (
    <div className="middle-comp">
      <div className="background">
        <div className="background-child"> </div>
      </div>

      <div className="mid-left">
        <h1>Lorem</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          repudiandae laudantium molestias, nisi nobis impedit sint
          reprehenderit a sed eum!
        </p>
        <button>Learn More</button>
      </div>

      <div className="mid-right">
        <div className="slider-main-div">
          <div className="navbar">
            <div className="left-nav" onClick={handlePrev}>
              Prev
            </div>
            <div className="right-nav" onClick={handleNext}>
              Next
            </div>
          </div>
          <div className="slider">
            <div
              className="slides"
              style={{
                transform: `translate(${-x}%)`,
                transition: "0.8s",
              }}
            >
              <div className="slide1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Learn More</button>
                <img
                  src="https://images.unsplash.com/photo-1618886487325-f665032b6352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNreSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="slide1"
                />
              </div>
              <div className="slide2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Learn More</button>

                <img
                  src="https://images.unsplash.com/photo-1516649195228-a023c093df99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNreSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="slide1"
                />
              </div>
              <div className="slide3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>Learn More</button>

                <img
                  src="https://images.unsplash.com/photo-1442323794357-25b2ec110967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2t5JTIwaW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="slide1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
