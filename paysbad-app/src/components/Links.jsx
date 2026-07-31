import React from 'react';
import data from '../data.json';
import './DataDisplay.css';

const Links = () => {
  const { links } = data;

  return (
    <div>
      <h2>Liens Utiles</h2>
      {links.map(link => (
        <div key={link.id} className="data-card">
          <h3>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Links;
