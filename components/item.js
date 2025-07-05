import React, { useState } from 'react';
function ItemList() {
  const [items, setItems] = useState(['Apple','Banana','Orange','Grapes']);
  const handleDelete = (indexToRemove) => {
    const updatedItems = items.filter((item, index) => {
      return index !=indexToRemove;
    });
    setItems(updatedItems);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>Fruit List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{marginLeft: '10px',padding: '5px 5px',
                backgroundColor: 'blue',color: 'white',
                border: 'none',borderRadius: '5px',
                cursor: 'pointer'}}>Delete</button>
          </li>
        ))}
        {items.length == 0 && <p>No items left!</p>}
      </ul>
    </div>
  );
}
export default ItemList;