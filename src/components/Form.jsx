import { useState } from "react";
import plate from "../assets/plate.webp";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    people: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Your information: ${formData.name}, ${formData.email},${formData.date},${formData.time}, ${formData.people}`
    );
    setFormData({ name: "", email: "", date: "", time: "", people: "" });
  };

  return (
    <div className="form" id="contact">
      <div className="form__content container">
        <div className="form__top">
          <h4>RESERVATION</h4>
          <h2>BOOK YOUR TABLE</h2>
        </div>
        <div className="form__images">
          <img className="plate" src={plate} alt="" />
        </div>
        <form className="form__block" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              id="name"
              value={formData.name}
              autoComplete="off"
              required
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="EMAIL"
              id="email"
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="date">
            <input
              type="text"
              name="date"
              value={formData.date}
              placeholder="DATE"
              id="date"
              required
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="time">
            <input
              type="text"
              name="time"
              value={formData.time}
              placeholder="TIME"
              id="time"
              required
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="people">
            <input
              type="number"
              name="people"
              placeholder="NO. OF PEOPLE"
              value={formData.people}
              id="people"
              required
              onChange={handleInputChange}
            />
          </label>
          <button type="submit" href="#" className="btn">
            FIND A TABLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
