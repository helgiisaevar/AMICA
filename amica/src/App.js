import React from 'react';

import './App.css';
import logos from './amicalogo.png';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <a
          className="App-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdNHOjbxnGM-ck59CZJZ7GqjeIIVHn9GUodmWRor6Kv0t3Trg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        ><img src={logos}/>
        </a>
        <a>Ýttu á logoið til þess að svara spurningum um vöruna</a>



      </header>
    </div>
  );
}

export default App;
