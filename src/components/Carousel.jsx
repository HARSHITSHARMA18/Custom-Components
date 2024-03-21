import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { BiSolidCircle } from "react-icons/bi";

import Rectangle1 from "../images/Rectangle1.png";
import Rectangle2 from "../images/Rectangle2.png";
import Rectangle3 from "../images/Rectangle3.png";
import Rectangle4 from "../images/Rectangle4.png";
import Rectangle5 from "../images/Rectangle5.png";
import DotIndicator from "../images/DotIndicator.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const items = [Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5];

  const [initialVal, setInitialVal] = useState([
    {
      0: 0,
    },
    {
      1: 1,
    },
    {
      2: 2,
    },
    {
      3: 3,
    },
    {
      4: 4,
    },
  ]);

  const initialDimension = [
    {
      width: "97.328px",
      height: "64.516px",
    },
    {
      width: "154.828px",
      height: "102.109px",
    },
    {
      width: "290.859px",
      height: "191.688px",
    },
    {
      width: "126.078px",
      height: "102.109px",
    },
    {
      width: "115.859px",
      height: "76.797px",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1
        ? 0 % items.length
        : (prevIndex + 1) % items.length
    );

    const updatedArray = initialVal.map((obj) => {
      for (let key in obj) {
        if (obj[key] !== 0) {
          return { [key]: obj[key] - 1 };
        } else {
          return { [key]: 4 };
        }
      }
    });

    setInitialVal(updatedArray);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? (items.length - 1) % items.length
        : (prevIndex - 1) % items.length
    );

    const updatedArray = initialVal.map((obj) => {
      for (let key in obj) {
        if (obj[key] !== 4) {
          return { [key]: obj[key] + 1 };
        } else {
          return { [key]: 0 };
        }
      }
    });

    setInitialVal(updatedArray);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, items.length]);

  return (
    <div className="carousel">
      <div className="cards-container">
        <div className="carousel-cards">
          {items.map((item, index) => {
            const currentVal = Object.values(initialVal[index])[0];

            const { width, height } = initialDimension[index];

            return (
              <div
                key={index}
                className={`card-${currentVal} ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: width,
                  height: height,
                }}
              >
                <img
                  src={items[currentVal]}
                  alt=""
                  className={`card-image-${currentVal} ${
                    index === currentIndex ? "active" : ""
                  }`}
                  style={{
                    width: width,
                    height: height,
                  }}
                />

                <div key={index} className="description ">
                  <h2>Check Out</h2>
                </div>
              </div>
            );
          })}
        </div>

        <div className="controls">
          <button className="prev" onClick={handlePrev}>
            <FaArrowLeft size={30} color="grey" />
          </button>

          <BiSolidCircle style={{ padding: "0.5rem" }} color="grey" />
          <BiSolidCircle style={{ padding: "0.5rem" }} color="grey" />
          <img
            src={DotIndicator}
            alt=""
            style={{ width: "30px", padding: "0.5rem" }}
            className="indicator"
          />
          <BiSolidCircle style={{ padding: "0.5rem" }} color="grey" />
          <BiSolidCircle style={{ padding: "0.5rem" }} color="grey" />

          <button className="next" onClick={handleNext}>
            <FaArrowRight size={30} color="grey" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
