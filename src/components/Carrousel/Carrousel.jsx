import React, { useState } from 'react';
import '../../styles/Carrousel.scss';
import iconImageLeft from '../../assets/chevron_left.png';
import iconImageRight from '../../assets/chevron_right.png';  

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
        {images.length > 1 && ( // Condition pour afficher les boutons et la pagination seulement s'il y a plus d'une image
          <>
            <button className="carrousel-button left" onClick={prevImage}>{<img src={iconImageLeft} alt='boutton Left'></img>}</button>
            <button className="carrousel-button right" onClick={nextImage}>{<img src={iconImageRight} alt='bouton Right'></img>}</button>
            <div className="pagination">{`${currentImage + 1}/${images.length}`}</div>
          </>
        )}
        {images.length > 0 && (
          <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="carrousel-image" />
        )}
      </div>
    </div>
  );
}

export default Carrousel;









