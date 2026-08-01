import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import Reservations from './components/Reservations';
import Notes from './components/Notes';
import Links from './components/Links';
import Programme from './components/Programme';
import ShoppingList from './components/ShoppingList';
import BoardGames from './components/BoardGames';

function App() {
  const [view, setView] = useState('programme'); // 'programme', 'map', 'reservations', 'notes', 'links', 'shopping', 'games'

  const renderView = () => {
    switch (view) {
      case 'programme':
        return <Programme />;
      case 'map':
        return <Map />;
      case 'reservations':
        return <Reservations />;
      case 'notes':
        return <Notes />;
      case 'links':
        return <Links />;
      case 'shopping':
        return <ShoppingList />; // Ce composant gère maintenant ses propres données
      case 'games':
        return <BoardGames />;
      default:
        return <Programme />;
    }
  };

  const navLinks = (
    <ul>
      <li><a href="#programme" className={view === 'programme' ? 'active' : ''} onClick={() => setView('programme')}>Programme</a></li>
      <li><a href="#map" className={view === 'map' ? 'active' : ''} onClick={() => setView('map')}>Carte</a></li>
      <li><a href="#reservations" className={view === 'reservations' ? 'active' : ''} onClick={() => setView('reservations')}>Réservations</a></li>
      <li><a href="#notes" className={view === 'notes' ? 'active' : ''} onClick={() => setView('notes')}>Notes</a></li>
      <li><a href="#links" className={view === 'links' ? 'active' : ''} onClick={() => setView('links')}>Liens Utiles</a></li>
      <li><a href="#shopping" className={view === 'shopping' ? 'active' : ''} onClick={() => setView('shopping')}>Liste de courses</a></li>
      <li><a href="#games" className={view === 'games' ? 'active' : ''} onClick={() => setView('games')}>Liste des jeux</a></li>
    </ul>
  );
  
  const bottomNavLinks = (
    <>
      <a href="#programme" className={view === 'programme' ? 'active' : ''} onClick={() => setView('programme')}>
        <svg className="icon" viewBox="0 0 24 24"><path d="M15 7v10H9V7h6zm6-2h-4V3h-2v2h-4V3H9v2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>
        Programme
      </a>
      <a href="#map" className={view === 'map' ? 'active' : ''} onClick={() => setView('map')}>
        <svg className="icon" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/></svg>
        Carte
      </a>
      <a href="#reservations" className={view === 'reservations' ? 'active' : ''} onClick={() => setView('reservations')}>
        <svg className="icon" viewBox="0 0 24 24"><path d="M20 6h-2V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H8c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2h4v2h-4V4zm6 14H8V8h12v10z"/></svg>
        Résas
      </a>
      <a href="#notes" className={view === 'notes' ? 'active' : ''} onClick={() => setView('notes')}>
        <svg className="icon" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        Notes
      </a>
      <a href="#shopping" className={view === 'shopping' ? 'active' : ''} onClick={() => setView('shopping')}>
        <svg className="icon" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-9.8-3.2c.1-.1.1-.2 0-.3l-1-1.7c-.1-.1-.2-.2-.4-.2H3V9h2l3.6 6.5c.1.1.2.2.4.2h7.8c.2 0 .3-.1.4-.2l2.3-4.4c.1-.1 0-.3-.1-.4l-11-4.6c-.1 0-.3.1-.3.2L3.1 9H2.6c-.3 0-.5.2-.5.5v.1c0 .2.1.4.3.4h.4l2.5 4.3.2.3c0 .1-.1.2-.2.2l-2.7.9c-.2 0-.3.2-.3.4v.1c0 .2.2.4.4.4h1.5c.2 0 .4-.1.4-.3l.7-1.2z"/></svg>
        Courses
      </a>
      <a href="#games" className={view === 'games' ? 'active' : ''} onClick={() => setView('games')}>
        <svg className="icon" viewBox="0 0 24 24"><path d="M22 12V4H2v8c1.1 0 2 .9 2 2s-.9 2-2 2v4h20v-4c-1.1 0-2-.9-2-2s.9-2 2-2zM8 11H4V6h4v5zm6 0h-4V6h4v5zm6 0h-4V6h4v5z"/></svg>
        Jeux
      </a>
    </>
  );

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>Pays-Bad Trip</h2>
        <nav>
          {navLinks}
        </nav>
      </aside>
      <main className="main-content">
        {renderView()}
      </main>
      <nav className="bottom-nav">
        {bottomNavLinks}
      </nav>
    </div>
  );
}

export default App;
