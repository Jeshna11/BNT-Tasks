import React, { useState } from 'react';
function CheckboxMessage() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <label>
        <input type="checkbox" checked={isChecked}
          onChange={handleChange}
        />
        Click me!
      </label>
      {isChecked && <p>You checked the box!</p>}
    </div>
  );
}
export default CheckboxMessage;