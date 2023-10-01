import React, { useEffect, useState } from 'react';
import Collapse from '../components/Collapse/Collapse';
import Banner from '../components/Banner/Banner.jsx';  

function About() {
    const [aboutData, setAboutData] = useState([]);
  
    useEffect(() => {
      // On charge les donnée avec la requête Fetch
      fetch('/data/About.json')
        .then((response) => response.json())
        .then((data) => setAboutData(data))
        .catch((error) => console.error('Erreur de chargement des données :', error));
    }, []);
  
    return (
      <div className="about">
        <div className="banner-about">
        <Banner page="about" />
  
     </div>
        <div className="accordion">
          {aboutData.map((item) => (
            <Collapse key={item.id} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    );
  }

  export default About;