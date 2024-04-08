import React from 'react';
import NavBar from './components/navBar/navBar'; 
import ItemListContainer from './components/ItemListConstainer/ItemListContainer'; 
import './App.css'; 

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <ItemListContainer message="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;
