import { useState } from "react";
import burgerone from "../assets/burger__1.webp";
import burgertwo from "../assets/burger__2.webp";

const Products = () => {
  const [buttonStates, setButtonStates] = useState([false, false, false]);

  function handleMouseEnter(index) {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  }

  function handleMouseLeave(index) {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  }

  return (
    <div className="product" id="menu">
      <div className="product__content container">
        <div className="product__top">
          <h4>ALWAYS TASTY BURGER</h4>
          <h2>CHOOSE & ENJOY</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="product__blocks">
          <div className="product__block">
            <img
              className={`big ${buttonStates[0] && "shake"}`}
              src={burgerone}
              alt=""
            />
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <a
              href=""
              className="btn btn--scale"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              ORDER NOW
            </a>
          </div>
          <div className="product__block">
            <img
              className={`big ${buttonStates[1] && "shake"}`}
              src={burgertwo}
              alt=""
            />
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <a
              href="#"
              className="btn btn--scale"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              ORDER NOW
            </a>
          </div>
          <div className="product__block">
            <img
              className={`big ${buttonStates[2] && "shake"}`}
              src={burgerone}
              alt=""
            />
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <a
              href="#"
              className="btn btn--scale"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
