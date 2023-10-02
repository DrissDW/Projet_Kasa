import React from 'react';
import Banner from '../components/Banner/Banner.jsx'; 
import Gallery from '../components/Gallery/Gallery.jsx'
import '../styles/Home.scss'; 

function Home() {
  return (
    <div className="home">
      <Banner page="home" />
      <Gallery />
      
    </div>
  );
}

export default Home;
  