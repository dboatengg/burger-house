import heroImage from "../assets/hero__img.png";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero__content container">
        <div className="hero__text">
          <p>It is a good time for the great taste of burgers</p>
          <h1>BURGER</h1>
          <h2>WEEK</h2>
        </div>
        <div className="hero__image">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
