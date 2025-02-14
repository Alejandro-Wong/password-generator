import React from 'react'
import './Parameters.css';

function Parameters({length,numNums, numCaps, numSpec, changeLength, changeNumNums, changeNumCaps, changeNumSpec}) {

  const handleLengthChange = (e) => {
    e.preventDefault();
    changeLength(e.target.value);
  };

  const handleNumNumsChange = (e) => {
    e.preventDefault();
    changeNumNums(e.target.value);
  };

  const handleNumCapsChange = (e) => {
    e.preventDefault();
    changeNumCaps(e.target.value);
  };  

  const handleNumSpecChange = (e) => {
    e.preventDefault();
    changeNumSpec(e.target.value);
  };  
  
  return (
    <div className="parameters">
      <div className="param">
        <span>Password Length</span>
        <input className="input" type="number" min="0" max="100" defaultValue={length} onChange={handleLengthChange}/>
      </div>
      <div className="param">
        <span>Number of Digits</span>
        <input className="input" type="number" min="0" max="100" defaultValue={numNums} onChange={handleNumNumsChange}/>
      </div>
      <div className="param">
        <span>Number of Capitalized Letters</span>
        <input className="input" type="number" min="0" max="100" defaultValue={numCaps} onChange={handleNumCapsChange}/>
      </div>
      <div className="param">
        <span>Number of Special Characters</span>
        <input className="input" type="number" min="0" max="100" defaultValue={numSpec} onChange={handleNumSpecChange}/>
      </div>
    </div>
  )
}

export default Parameters