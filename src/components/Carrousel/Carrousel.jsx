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
      <div className="carrousel-image-container">
        {images.length > 1 && ( // Condition pour afficher les boutons seulement s'il y a plus d'une image
          <>
            <button className="carrousel-button left" onClick={prevImage}>{"<"}</button>
            <button className="carrousel-button right" onClick={nextImage}>{">"}</button>
          </>
        )}
        {images.length > 0 && (
          <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="carrousel-image" />
        )}
        <div className="pagination">{`${currentImage + 1}/${images.length}`}</div>
      </div>
    </div>
  );
}

export default Carrousel;









