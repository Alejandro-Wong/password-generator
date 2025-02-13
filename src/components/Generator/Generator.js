import React from 'react'
import generatePassword from '../../passwordGenerator';
import './Generator.css';

function Generator({instruction,password, setPassword, length, numCaps, numSpec, numNums}) {

  // Handle Generate Button Click
  const handleGenerateClick = () => {
    const newPassword = generatePassword(length, numCaps, numSpec, numNums);
    setPassword(newPassword);
  };

  return (
    <div className="generator">
      <div className="spacer"></div>
        <div className="passwordDisplay">
            <span 
            id="password" 
            style={
              {opacity: password === instruction ? 0.75 : 1, 
              fontStyle: password === instruction ? 'italic' : 'normal'}}>
              {password}
            </span>
        </div>
        <button className="generateButton" onClick={handleGenerateClick}>Generate</button>
    </div>
  )
}

export default Generator