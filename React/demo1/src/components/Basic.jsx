// Task1:Increment Counter
// Author:SaranyaR
//created date 8-06-2024
import React, { useState } from "react";

const Basic = () => {
  const [counter, setCounter] = useState(0);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [displayLocation, setDisplayLocation] = useState('');

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const handleClick = () => {
    setDisplayName(name);
    setDisplayLocation(location);
  };

  return (
    <div>
      <div className="hover-text" onMouseEnter={incrementCounter}>
        This is a custom component
      </div>
      <button>Counter: {counter}</button>

      <div>
        <div>
          <label>
            Employee Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Employee Location:
            <input type="text" value={location} onChange={handleLocationChange} />
          </label>
        </div>
        <button onClick={handleClick}>Display</button>
        <div>
          <p>Employee Name: {displayName}</p>
          <p>Employee Location: {displayLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default Basic;
