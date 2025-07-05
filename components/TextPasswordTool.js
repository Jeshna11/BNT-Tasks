import React, { useState } from 'react';
function TextPasswordTool() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [strengthMsg, setStrengthMsg] = useState('');
  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const reverseCapitalize = () => {
    const reversed = text.split('').reverse().join('');
    const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1);
    setText(capitalized);
  };
  const checkStrength = () => {
    let errors = [];
    if (password.length < 8) errors.push("Minimum 8 characters");
    if ((password.match(/[A-Z]/g) || []).length < 2) errors.push("At least 2 uppercase letters");
    if (!/[a-z]/.test(password)) errors.push("At least 1 lowercase letter");
    if (!/[0-9]/.test(password)) errors.push("At least 1 number");
    if (!/[@/$#]/.test(password)) errors.push("At least one special char (@, /, $, #)");
    if (errors.length === 0) {
      setStrengthMsg("Strong Password!");
    } else {
      setStrengthMsg("Weak Password:\n" + errors.join("\n"));
    }
  };
  return (
    <div className="App">
      <h1>Text Transformer</h1>
      <input
        type="text"
        value={text}
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <button onClick={toUpper}>UPPERCASE</button>
        <button onClick={toLower}>lowercase</button>
        <button onClick={reverseCapitalize}>Reverse & Capitalize</button>
      </div>
      <h1>Password Checker</h1>
      <input
        type="password"
        value={password}
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={checkStrength}>Check Strength</button>
      <pre>{strengthMsg}</pre>
    </div>
  );
}
export default TextPasswordTool;