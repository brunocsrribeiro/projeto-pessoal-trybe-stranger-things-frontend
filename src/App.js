import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      {
        process.env.REACT_APP_HAWKINS_URL
          ? <StrangerThings />
          : <h1> Em desenvolvimento </h1>
      }
    </div>
  );
}

export default App;
