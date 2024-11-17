import React from 'react';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent'; 
import './styles/components/DropMenu.css';
import './styles/components/NavBar.css';
import './styles/components/MainContent.css';
import './styles/components/NavButton.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
