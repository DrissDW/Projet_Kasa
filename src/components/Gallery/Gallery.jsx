import React, { useState, useEffect } from 'react';
import '../../styles/Gallery.scss';

function Gallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    // requête pour charger le fichier JSON 
    fetch('/data/logementsList.json')
      .then((response) => response.json())
      .then((data) => {
       
        setLogements(data);
      })
      .catch((error) => {
        console.error('Une erreur est produite lors du chargement du fichier JSON :', error);
      });
  }, []);

  return (
    <div className="gallery">
      <h1>GALLERY</h1>
      <div className="logement-container">
        {logements.length > 0 ? (
          logements.map((logement, index) => (
            <div className="logement" key={index}>
              <p className="logement-title">{logement.title}</p>
              
            </div>
          ))
        ) : (
          <p>Aucun logement n'a été trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default Gallery;

