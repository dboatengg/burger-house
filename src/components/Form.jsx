import { useState } from "react";
import { send } from "emailjs-com";

import plate from "../assets/plate.webp";

const Form = () => {
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    people: "",
  });

  const handleInputChange = (event) => {
    setToSend({ ...toSend, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    send("service_w353dbo", "template_kmmyiic", toSend, "VIQ9nPHY5RWXpa3qI")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setToSend({ name: "", email: "", date: "", time: "", people: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    alert("Thank you for booking a table");
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
              value={toSend.name}
              autoComplete="off"
              required
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={toSend.email}
              placeholder="EMAIL"
              id="email"
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="date">
            <input
              type="text"
              name="date"
              value={toSend.date}
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
              value={toSend.time}
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
              value={toSend.people}
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
