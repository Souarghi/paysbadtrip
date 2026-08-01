import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const BoardGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('board_games')
        .select('*')
        .order('id', { ascending: true });

      if (error) console.error('Error fetching games:', error);
      else setGames(data);
      setLoading(false);
    };
    fetchGames();
  }, []);

  const handleToggleBrought = async (id, currentStatus) => {
    // Met à jour l'état local pour la réactivité
    const updatedGames = games.map(game =>
      game.id === id ? { ...game, brought: !currentStatus } : game
    );
    setGames(updatedGames);

    // Met à jour la base de données
    const { error } = await supabase
      .from('board_games')
      .update({ brought: !currentStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating game status:', error);
      // En cas d'erreur, on revient à l'état précédent
      setGames(games);
    }
  };

  if (loading) {
    return <div>Chargement de la liste des jeux...</div>;
  }

  return (
    <div className="data-container" style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>🎲 Jeux de Société à Emporter</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {games.map(game => (
          <li key={game.id} style={{ fontSize: '1.1em', padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input type="checkbox" checked={game.brought} onChange={() => handleToggleBrought(game.id, game.brought)} style={{ marginRight: '15px', transform: 'scale(1.3)' }} />
              <span style={{ textDecoration: game.brought ? 'line-through' : 'none', color: game.brought ? '#aaa' : '#000' }}>{game.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardGames;