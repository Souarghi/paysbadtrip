import React, { useState } from 'react';
import './ShoppingList.css';
import initialData from '../data.json';

const ShoppingList = () => {
  const [list, setList] = useState(initialData.shoppingList);

  const toggleItem = (id) => {
    setList(list.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="shopping-list-container">
      <h1>Liste de courses</h1>
      <ul className="list">
        {list.map(item => (
          <li
            key={item.id}
            className={`list-item ${item.completed ? 'completed' : ''}`}
            onClick={() => toggleItem(item.id)}
          >
            <div className="checkbox">
              <span>✓</span>
            </div>
            <span className="item-text">{item.item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;

