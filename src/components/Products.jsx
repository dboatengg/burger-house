import burgerone from "../assets/burger__1.png";
import burgertwo from "../assets/burger__2.png";

const Products = () => {
  return (
    <div className="product">
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
            <img src={burgerone} alt="" />
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <a href="" className="btn">
              ORDER NOW
            </a>
          </div>
          <div className="product__block">
            <img src={burgertwo} alt="" />
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <a href="" className="btn">
              ORDER NOW
            </a>
          </div>
          <div className="product__block">
            <img src={burgerone} alt="" />
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <a href="" className="btn">
              ORDER NOW
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
