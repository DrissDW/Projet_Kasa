import React, { useState } from 'react';
import '../../styles/Collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header">
        <div className="collapse-title">{title}</div>
        <button className={`collapse-button ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
          {isOpen ? <span>&#9660;</span> : <span>&#9654;</span>}
        </button>
      </div>
      <div className="collapse-content">
        {content}
      </div>
    </div>
  );
}

export default Collapse;








