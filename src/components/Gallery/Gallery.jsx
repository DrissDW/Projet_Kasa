import React, { useState, useEffect } from 'react';
import '../../styles/Gallery.scss';
import { Link } from 'react-router-dom';

function Gallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    // Requête pour charger le fichier JSON
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
      <div className="logement-container">
        {logements.length > 0 ? (
          logements.map((logement, index) => (
            <Link to={`/logement/${logement.id}`} key={index} className="logement">
              <div
                className="logement-cover"
                style={{
                  backgroundImage: `url(${logement.cover})`
                  
                }}
              >
                <div className="logement-title-container">
                  <p className="logement-title">{logement.title}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Aucun logement n'a été trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default Gallery;


