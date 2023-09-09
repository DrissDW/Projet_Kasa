import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.scss';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
          
         
        
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

