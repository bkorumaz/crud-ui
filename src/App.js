import React from "react";
import HomePage from "./components/HomePage/HomePage";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <HomePage>
            <Header/>
            <Card/>
            <Footer/>
        </HomePage>
    </div>
  );
}

export default App;
