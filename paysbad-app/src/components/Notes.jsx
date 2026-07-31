import React from 'react';
import data from '../data.json';
import './DataDisplay.css';

const Notes = () => {
  const { notes } = data;

  return (
    <div>
      <h2>Notes de Voyage</h2>
      {notes.map(note => (
        <div key={note.id} className="data-card">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
