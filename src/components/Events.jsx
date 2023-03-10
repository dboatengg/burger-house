import { useState, useEffect } from "react";
import upcoming from "../assets/upcoming-events.webp";
import card2 from "../assets/cardtitle2.webp";
import card3 from "../assets/cardtitlet3.webp";

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [upcoming, card2, card3];
  const titles = ["Upcoming Events", "Card Title 2", "Card Title 3"];
  const subTitles = ["Discover", "News", "Blog"];
  const texts = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan vel facilisis. ",
    "Ipsium is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make...",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,...",
  ];
  const dots = [0, 1, 2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current index, wrapping around to 0 if we go past the end of the array
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="events" id="story">
      <div className="card container">
        <div className="card__img">
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </div>
        <div className="card__left">
          <div className="card__content">
            <h4>{subTitles[currentIndex]}</h4>
            <h2>{titles[currentIndex]}</h2>
            <p>{texts[currentIndex]}</p>
          </div>
          <div className="carousel-dots">
            {dots.map((dot, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
