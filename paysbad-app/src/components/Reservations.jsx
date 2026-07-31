import React from 'react';
import data from '../data.json';
import './DataDisplay.css';

const Reservations = () => {
  const { reservations } = data;

  return (
    <div>
      <h2>Réservations</h2>
      {reservations.map(res => (
        <div key={res.id} className="data-card">
          <h3>{res.type}: {res.name}</h3>
          <p><strong>Confirmation #:</strong> {res.confirmation}</p>
          <p><strong>Dates:</strong> {res.dates}</p>
        </div>
      ))}
    </div>
  );
};

export default Reservations;
