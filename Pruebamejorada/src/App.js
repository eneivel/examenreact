import React from "react";
import MiApp from "./components/MiApi";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App" >
      <header className="container">
        <h1>Rick and Morty</h1>
      </header>
      <main className="container form-control p-2"><MiApp /></main>
      <footer className="container">
        <h2>Prueba React</h2>
      </footer>

    </div>
  );
}

export default App;
