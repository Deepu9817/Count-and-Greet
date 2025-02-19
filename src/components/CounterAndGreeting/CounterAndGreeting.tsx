import React, { useState } from 'react';
import './CounterAndGreeting.css'
const CounterAndGreeting: React.FC = () => {
  // State variables
  const [count, setCount] = useState<number>(0); // Counter state
  const [username, setUsername] = useState<string>(''); // Username state

  // Handler functions for counter buttons
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  // Handler function for updating username
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className='main-div'>
      {/* Counter Section */}
      <section className='counter'>
        <h2>Counter</h2>
        <p>Current Count: {count}</p>
        <div className='btn-div'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count === 0}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
      </section>

      {/* Greeting Section */}
      <section className='greeting'>
        <h2>Greeting</h2>
        <input 
          type="text" 
          value={username} 
          onChange={handleUsernameChange} 
          placeholder="Enter your name"
        />
        <p>{username ? `Hello, ${username}!` : 'Hello, stranger!'}</p>
      </section>
    </div>
  );
};

export default CounterAndGreeting;
