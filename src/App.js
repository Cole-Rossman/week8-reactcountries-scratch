import React from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Main from './views/Main/Main';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
