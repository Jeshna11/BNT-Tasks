import React, { useState } from 'react';
function StarRating() {
  const [rating, setRating] = useState(0);
  const handleClick = (star) => {
    setRating(star);
  };
  const handleReset = () => {
    setRating(0);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Star Rating App</h1>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleClick(star)}
            style={{
              fontSize: '40px',
              color: star <= rating ? 'gold' : 'gray',
              cursor: 'pointer',
            }}
          >
            ★
          </span>
        ))}
      </div>
      <p style={{ fontSize: '20px', marginTop: '10px', fontWeight:'bolder' }}>
        Rating: {rating}
      </p>
      <button onClick={handleReset} style={{ marginTop: '10px', padding: '8px 16px' }}>
        Reset
      </button>
    </div>
  );
}
export default StarRating;