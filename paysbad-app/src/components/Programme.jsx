import React from 'react';
import './Programme.css';
import data from '../data.json';

// Simple component to render icons based on a name
const Icon = ({ name }) => (
  <svg className="icon" width="24" height="24" viewBox="0 0 24 24">
    {/* This is a simple placeholder. Ideally, you'd have a library or a sprite sheet. */}
    {name === 'train' && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm2 0V7h2v9h-2z" />}
    {name === 'hotel' && <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2V7z" />}
    {name === 'food' && <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5V8H21V2h-2v4h-2.5z" />}
    {name === 'walk' && <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 11.7V14h2v7h2v-7h2v7h2v-7h2v-2.3l-2.8-2.8c-.3-.3-.7-.4-1.2-.4s-1.1.2-1.4.5L12 10l-2.2-2.2c-.3-.3-.7-.4-1.2-.4s-1 .1-1.3.4z"/>}
    {/* Add other icons as needed */}
    {name === 'attraction' && <path d="m12 2-5.5 9h11z" />}
    {name === 'bar' && <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7L5.66 5h12.69l-1.78 2H7.43z" />}
    {name === 'museum' && <path d="M1 22h22V10l-3-3-3 3-3-3-3 3-3-3-3 3z" />}
    {name === 'park' && <path d="M17 12h2L12 2 5 12h2v8h8v-8z" />}
    {name === 'shop' && <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />}
    {name === 'boat' && <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44-1.71-5.56-1.71-8 0C6.78 20.53 5.39 21 4 21H3v-2l1.41-1.41c1.1-1.1 2.69-1.84 4.34-2.23.28-.06.56-.1.85-.1s.57.04.85.1c1.65.39 3.24 1.12 4.34 2.23L21 19v2h-1zM3.95 10H20v2H3.95c-.53 0-1.02.21-1.38.58L1 14.17V10h2.95zM22 8V6h-4V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v2H2v2h20z" />}
    {name === 'home' && <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />}
    {name === 'person' && <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />}
    {name === 'night' && <path d="M7.5 2c-1.13 0-2.17.47-2.95 1.25C3.77 4.03 3.3 5.07 3.3 6.2c0 1.67 1.05 3.1 2.52 3.63C5.1 10.5 5 11.23 5 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-.77-.1-1.5-.28-2.17C14.15 9.3 15.2 7.87 15.2 6.2c0-1.13-.47-2.17-1.25-2.95C13.17 2.47 12.13 2 11 2h-.5c-.9 0-1.75.35-2.38.97C8.01 2.38 7.76 2 7.5 2zM19.5 9.5c.34 0 .68.04 1.01.12C20.82 8.5 21 7.4 21 6.2c0-1.55-.83-2.9-2.06-3.66C18.23 2.15 17.44 2 16.6 2h-.2c-.43 0-.85.11-1.21.32.33.51.58 1.08.73 1.69.57.25.98.81.98 1.49 0 .88-.72 1.6-1.6 1.6-.13 0-.26-.02-.38-.05-.28.79-.78 1.48-1.43 2.01.69.59 1.19 1.43 1.38 2.38.33-.08.67-.12 1.01-.12 2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5c0-1.03.35-1.97.92-2.75-.85-.6-1.48-1.49-1.76-2.52C13.2 12.02 13 12.5 13 13c0 1.65 1.35 3 3 3s3-1.35 3-3c0-1.03-.53-1.92-1.31-2.45.21-.69.21-1.42 0-2.1.8-.49 1.31-1.36 1.31-2.35 0-.44-.13-.84-.33-1.2.22-.09.46-.15.72-.15z"/>}
    {!name && <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />}
  </svg>
);


const Programme = () => {
  return (
    <div className="programme-container">
      <h1>Programme du Voyage</h1>
      {data.programme.map(day => (
        <div key={day.id} className="day-card">
          <h2 className="day-header">
            <span className="day-emoji">{day.emoji}</span>
            {day.day}, {day.date} - <strong>{day.city}</strong>
          </h2>
          <div className="timeline">
            {day.events.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <Icon name={event.icon || 'default'} />
                </div>
                <div className="timeline-content">
                  <span className="event-time">{event.time}</span>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programme;
