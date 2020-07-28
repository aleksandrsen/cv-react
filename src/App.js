import React from 'react';
import './App.css';
import "./scss/style.scss";
import MainInfo from "./main";
import AddInfo from "./addInfo";

function App() {
  return (
    // <div className="App">

      <main>
        <div className="container">
            <MainInfo/>
            <AddInfo/>
        </div>


      </main>
    // </div>
  );
}

export default App;
