import React from "react";
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import Card from "./components/HomePage/Card/Card";

function App() {
  return (
    <div className="App">
        <HomePage>
            <Card/>

        </HomePage>
    </div>
  );
}

export default App;
