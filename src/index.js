import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.scss';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './pages/Error.jsx';
import About from './pages/About';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="/a-propos" element={<About />} /> 
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
