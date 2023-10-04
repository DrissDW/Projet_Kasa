import React, { useState } from 'react';
import '../../styles/Collapse.scss';
import iconImage from '../../assets/arrow-collapse.png'; 

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const iconRotation = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header">
        <div className="collapse-title">{title}</div>
        <button className={`collapse-button ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
          <img
            src={iconImage}
            alt={isOpen ? 'Icône ouverte' : 'Icône fermée'}
            style={{
              transform: `rotate(180deg) ${iconRotation}`,
              transition: 'transform 0.3s ease',
            }}
          />
        </button>
      </div>
      <div className="collapse-content">
        {content}
      </div>
    </div>
  );
}

export default Collapse;













