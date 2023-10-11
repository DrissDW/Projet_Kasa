import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Collapse from "../components/Collapse/Collapse";
import "../../src/styles/FicheLogement.scss";
import Error from "./Error.jsx";
import redStarImage from "./../assets/red_star.png";
import greyStarImage from "./../assets/grey_star.png";

// Fonction pour générer les étoiles en fonction du rating
function generateStarRating(rating) {
  const ratingStars = [];
  const maxRating = 5;

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      ratingStars.push(<img key={i} src={redStarImage} alt="Étoile rouge" />);
    } else {
      ratingStars.push(<img key={i} src={greyStarImage} alt="Étoile grise" />);
    }
  }

  return ratingStars;
}

function FicheLogement() {
  const { id: logementId } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    // Chargement des données du logement depuis le fichier JSON
    fetch(`${process.env.PUBLIC_URL}/data/logementsList.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Logement ID:", logementId); // On vérifiez la valeur de logementId
        console.log("Data:", data); // On vérifiez la structure de vos données
        const selectedLogement = data.find((item) => item.id === logementId);

        console.log("Selected Logement:", selectedLogement); // On vérifie les données du logement sélectionné
        setLogement(selectedLogement);
      })
      .catch((error) => {
        console.error(
          "Une erreur est survenue lors du chargement des données du logement :",
          error
        );
      });
  }, [logementId]);

  return (
    <div className="fiche-logement">
      {logement ? (
        <>
          <Carrousel images={logement.pictures || [logement.picture]} />

          <div className="global-container">
            <div className="title-location-tags-container">
              <div className="title-location-container">
                <h1 className="fiche-logement-title">{logement.title}</h1>
                <p className="fiche-logement-location">{logement.location}</p>
                <div className="tags-container">
                  {logement.tags.map((tag, index) => (
                    <div key={index} className="tag">
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="host-rating-container">
              <div className="host">
                <div className="host-name">{logement.host.name}</div>
                <div className="host-circle">
                  <img
                    src={logement.host.picture}
                    alt={logement.host.name}
                    className="host-picture"
                  />
                </div>
              </div>
              <div className="rating-container">
                <div className="star-rating"></div>
                {generateStarRating(parseInt(logement.rating)).map(
                  (star, index) => (
                    <span key={index} className="star-image">
                      {star}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="ficheLogement-collapse">
            <div>
              <Collapse
                title="Description"
                content={logement.description}
                pageName="ficheLogement-description"
              />
            </div>
            <div>
              <Collapse
                title="Équipements"
                content={
                  <ul>
                    {logement.equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                }
                pageName="ficheLogement-equipements"
              />
            </div>
          </div>
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default FicheLogement;
