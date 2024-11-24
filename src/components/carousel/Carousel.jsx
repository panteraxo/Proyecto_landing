import React, { useEffect, useState } from "react";
import img2 from "../../assets/images/img2.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
function Carousel() {
  const [current, setCurrent] = useState(0);
  const images = [img2, img4, img5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <div className="background">
        <div className="carousel">
          <img src={images[current]} alt={`carousel item ${current}`} />
        </div>
        <div className="indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
