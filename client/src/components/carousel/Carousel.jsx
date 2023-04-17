import "./carousel.css"
import React, { useState } from "react";

export default function Carousel({ location }) {
  const images = location.pictures;

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const showArrows = images.length > 1;

  return (
    <div className="carouselContainer">
      <div className="carouselImg" style={{ backgroundImage: `url(${images[currentImage]})` }}>
        <div className="navigationArrows">
          {showArrows && <i onClick={prevImage} className="fas fa-chevron-left"></i>}
          {showArrows && <i onClick={nextImage} className="fas fa-chevron-right"></i>}          
        </div>
        <div className="indexImg">
          <p>{currentImage +1}/{images.length}</p>
        </div>
      </div>
    </div>
  );
}