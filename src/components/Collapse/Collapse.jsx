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
        <button className="collapse-button" onClick={toggleCollapse}>
          {isOpen ? <span>&#9654;</span> : <span>&#9660;</span>}
        </button>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;






