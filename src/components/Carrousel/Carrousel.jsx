import React, { useState } from 'react';
import '../../styles/Carrousel.scss';

function Carrousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carrousel">
      <div className="carrousel-navigation">
        {images.length > 1 && (
          <>
            <button onClick={prevImage}>{"<"}</button>
            <p>{`${currentImage + 1}/${images.length}`}</p>
            <button onClick={nextImage}>{">"}</button>
          </>
        )}
      </div>
      {images.length > 0 && (
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        
      )}
    </div>
  );
}

export default Carrousel;



