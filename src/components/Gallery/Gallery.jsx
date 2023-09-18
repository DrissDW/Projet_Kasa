import React from 'react';
import '../../styles/Gallery.scss';

function Gallery() {
  return (
    <div className="gallery">
      <h1>GALLERY (provisoire)</h1>
      <div className="logement-container">
        {Array.from({ length: 6 }, (_, index) => (
          <div className="logement" key={index}>
            <p className="logement-title"> Titre du Logement</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;