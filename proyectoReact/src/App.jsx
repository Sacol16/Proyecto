import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent'; 
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent /> {/* Asegúrate de incluir MainContent aquí */}
    </div>
  );
}

export default App;
