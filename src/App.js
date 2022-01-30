import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Card>
            <p>This is content</p>
        </Card>
        <Footer/>
    </div>
  );
}

export default App;
