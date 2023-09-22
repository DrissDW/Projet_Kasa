import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import "../../src/styles/FicheLogement.scss";
import Error from "./Error.jsx";

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
          <h2>{logement.title}</h2>
          <Carrousel images={logement.pictures || [logement.picture]} />
          <p>{logement.description}</p>
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default FicheLogement;
