import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/index.css';
import Header from './components/section-components/Header';
import PrimaryButton from './components/widgets/Buttons/PrimaryButton';
import Navbar from './views/Navbar';

function App() {
  return (
    <div className="">
      {/* <Header
        startIconInput="fas fa-arrow-circle-down"
        lastIconInput="fas fa-arrow-circle-down"
      /> */}
      {/* <Header
        title="Home"
        lastFirstIcon="fas fa-arrow-circle-down"
        lastSecondIcon="fas fa-arrow-circle-down"
      /> */}
      {/* <PrimaryButton  value="Home" /> */}
      <Navbar/>
    </div>
  );
}

export default App;
