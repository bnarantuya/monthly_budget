import React from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Redirect from='/' to="/welcome/" />
    </div>
  );
}

export default App;
