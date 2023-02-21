// import bottle from "../assets/bottle.png";
import plate from "../assets/plate.png";

const Form = () => {
  return (
    <div className="form">
      <div className="form__content container">
        <div className="form__top">
          <h4>RESERVATION</h4>
          <h2>BOOK YOUR TABLE</h2>
        </div>
        <div className="form__images">
          {/* <img className="bottle" src={bottle} alt="" /> */}
          <img className="plate" src={plate} alt="" />
        </div>
        <form className="form__block">
          <label htmlFor="name">
            <input type="text" name="" placeholder="NAME" id="name" />
          </label>
          <label htmlFor="email">
            <input type="text" name="" placeholder="EMAIL" id="email" />
          </label>
          <label htmlFor="date">
            <input type="text" name="" placeholder="DATE" id="date" />
          </label>
          <label htmlFor="time">
            <input type="datetime" name="" placeholder="TIME" id="time" />
          </label>
          <label htmlFor="people">
            <input type="number" name="" placeholder="PEOPLE" id="people" />
          </label>
          <a href="/" className="btn">
            FIND A TABLE
          </a>
        </form>
      </div>
    </div>
  );
};

export default Form;
