import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wizard from './component/Wizard';

function App() {

  const stepper =['signup', 'address', 'contact']
  return (
    <div className="App">
      <Wizard header='Wizard Header' stepper={stepper}/>
    </div>
  );
}

export default App;
