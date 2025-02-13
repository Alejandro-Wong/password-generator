import { React, useState } from 'react'
import Generator from '../Generator/Generator';
import Parameters from '../Parameters/Parameters';
import './App.css';

const instruction = "Generate a new password with the following parameters";
function App() {

    // Initialize States
    const [length, setLength] = useState(15);
    const [numCaps, setNumCaps] = useState(2);  // Number of capitalized letters
    const [numSpec, setNumSpec] = useState(1);  // Number of special characters
    const [numNums, setNumNums] = useState(4);  // Number of numbers
    const [password, setPassword] = useState(instruction);

    // Change Parameters
    const changeLength = (num) => {
      setLength(num);
    };

    const changeNumCaps = (num) => {
      setNumCaps(num);
    };

    const changeNumNums = (num) => {
      setNumNums(num);
    };

    const changeNumSpec = (num) => {
      setNumSpec(num);
    };


    return (
    <div className="app">
        <Generator
        instruction={instruction} 
        password={password}
        setPassword={setPassword}
        length={length}
        numCaps={numCaps}
        numNums={numNums}
        numSpec={numSpec}/>
        <Parameters
        length={length}
        numCaps={numCaps}
        numNums={numNums}
        numSpec={numSpec}
        changeLength={changeLength}
        changeNumCaps={changeNumCaps}
        changeNumNums={changeNumNums}
        changeNumSpec={changeNumSpec}
        />
    </div>
  )
}

export default App