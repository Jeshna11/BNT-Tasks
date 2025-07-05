import React, { useState } from 'react';
function MultiTabForm() {
  const [tab, setTab] = useState('profile');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [hobbies, setHobbies] = useState({
    coding: false,
    music: false,
    reading: false
  });
  const [notification, setNotification] = useState('');
  const [preferences, setPreferences] = useState({
    email: false,
    sms: false,
    push: false
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };
  return (
    <div className="App">
      <h1>Multi Tab Form</h1>
      <div className="tabs">
        <button onClick={() => setTab('profile')}>Profile</button>
        <button onClick={() => setTab('interest')}>Interest</button>
        <button onClick={() => setTab('settings')}>Settings</button>
      </div>
      <form onSubmit={handleSubmit}>
        {tab === 'profile' && (
          <div className="tab-content">
            <h2>Profile</h2>
            <label>Age: <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /></label><br />
            <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label><br />
            <button type="submit">Submit Profile</button>
          </div>
        )}
        {tab === 'interest' && (
          <div className="tab-content">
            <h2>Interest</h2>
            <label>Select Field:
              <select value={interest} onChange={(e) => setInterest(e.target.value)}>
                <option value="">--Choose--</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="fullstack">Fullstack</option>
              </select>
            </label><br />
            <label>
              <input type="checkbox" checked={hobbies.coding}
                onChange={() => setHobbies({ ...hobbies, coding: !hobbies.coding })} />
              Coding
            </label><br />
            <label>
              <input type="checkbox" checked={hobbies.music}
                onChange={() => setHobbies({ ...hobbies, music: !hobbies.music })} />
              Music
            </label><br />
            <label>
              <input type="checkbox" checked={hobbies.reading}
                onChange={() => setHobbies({ ...hobbies, reading: !hobbies.reading })} />
              Reading
            </label><br />
            <button type="submit">Submit Interest</button>
          </div>
        )}
        {tab === 'settings' && (
          <div className="tab-content">
            <h2>Settings</h2>
            <label>Notification:</label><br />
            <label><input type="radio" value="on" checked={notification === 'on'} onChange={() => setNotification('on')} /> On</label><br />
            <label><input type="radio" value="off" checked={notification === 'off'} onChange={() => setNotification('off')} /> Off</label><br />
            <label>Preferences:</label><br />
            <label><input type="checkbox" checked={preferences.email}
              onChange={() => setPreferences({ ...preferences, email: !preferences.email })} />
              Email</label><br />
            <label><input type="checkbox" checked={preferences.sms}
              onChange={() => setPreferences({ ...preferences, sms: !preferences.sms })} />
              SMS</label><br />
            <label><input type="checkbox" checked={preferences.push}
              onChange={() => setPreferences({ ...preferences, push: !preferences.push })} />
              Push</label><br />
            <button type="submit">Submit Settings</button>
          </div>
        )}
      </form>
    </div>
  );
}
export default MultiTabForm;