import React, { useState, useMemo, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fonction pour récupérer les données
  const fetchShoppingList = async () => {
    const { data, error } = await supabase
      .from('shopping_list')
      .select('*')
      .order('category', { ascending: true })
      .order('id', { ascending: true });

    if (error) console.error('Error fetching shopping list:', error);
    else setList(data);
    setLoading(false);
  };

  useEffect(() => {
    // 1. Récupérer les données initiales
    fetchShoppingList();

    // 2. S'abonner aux changements en temps réel
    const channel = supabase
      .channel('shopping_list_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'shopping_list' },
        (payload) => {
          console.log('Change received!', payload);
          // Quand un changement arrive, on rafraîchit toute la liste
          fetchShoppingList();
        }
      )
      .subscribe();

    // 3. Se désabonner quand le composant est détruit
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Regroupe les articles par catégorie pour l'affichage
  const groupedList = useMemo(() => {
    return list.reduce((acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {});
  }, [list]);

  // Gère le changement de la case à cocher
  const handleToggleBought = async (id, currentStatus) => {
    const { error } = await supabase
      .from('shopping_list')
      .update({ bought: !currentStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating item status:', error);
      return;
    }

    const newList = list.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item
    );
    setList(newList);
  };

  // Gère le changement de quantité
  const handleQuantityChange = async (id, newQuantity) => {
    const quantity = parseFloat(newQuantity);
    if (isNaN(quantity) || quantity < 0) return;

    // Met à jour l'état local immédiatement pour une meilleure réactivité
    const newList = list.map(item =>
      item.id === id ? { ...item, quantity: quantity } : item
    );
    setList(newList);

    // Met à jour la base de données
    const { error } = await supabase
      .from('shopping_list')
      .update({ quantity: quantity })
      .eq('id', id);

    if (error) console.error('Error updating quantity:', error);
  };

  return loading ? (<div>Chargement de la liste de courses...</div>) : (
    <div className="shopping-list-container" style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>🛒 Liste de Courses</h2>
      {Object.entries(groupedList).map(([category, items]) => (
        <div key={category} style={{ marginBottom: '25px' }}>
          <h3 style={{ color: '#333' }}>{category}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {items.map(item => (
              <li key={item.id} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  padding: '8px 0', 
                  borderBottom: '1px solid #f0f0f0',
                  textDecoration: item.bought ? 'line-through' : 'none',
                  color: item.bought ? '#aaa' : '#000'
                }}>
                <input
                  type="checkbox"
                  checked={item.bought}
                  onChange={() => handleToggleBought(item.id, item.bought)}
                  style={{ marginRight: '10px', transform: 'scale(1.2)' }}
                />
                <span style={{ flexGrow: 1 }}>{item.item}</span>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  style={{ 
                    width: '60px', 
                    textAlign: 'center', 
                    marginRight: '5px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '4px'
                  }}
                  min="0"
                  step="0.5" // Permet les demi-unités (ex: 0.5 kg)
                />
                <span>{item.unit}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShoppingList;