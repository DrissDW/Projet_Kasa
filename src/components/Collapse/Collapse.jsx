import React, { useState } from 'react';
import '../../styles/Collapse.scss';
import iconImage from '../../assets/arrow-collapse.png'; 

function Collapse({ title, content, pageName }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const iconRotation = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';

  return (
    <div className={`collapse ${isOpen ? 'open' : ''} ${pageName}-collapse`}>
      <div className={`collapse-header ${pageName}-collapse-header`}>
      <div className={`collapse-title ${pageName}-collapse-title`}>{title}</div>
      <button className={`collapse-button ${isOpen ? 'open' : ''} ${pageName}-collapse-button`} onClick={toggleCollapse}>
          <img
            src={iconImage}
            alt={isOpen ? 'Icône ouverte' : 'Icône fermée'}
            style={{
              transform: `rotate(180deg) ${iconRotation}`,
              transition: 'transform 0.3s ease',
              width:'70%',
              height:'90%',
            }}
          />
        </button>
      </div>
      <div className={`collapse-content ${pageName}-collapse-content`}>
  <p>{content}</p>
</div>

    </div>
  );
}

export default Collapse;













