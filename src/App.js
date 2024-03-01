import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
        <Route path="/" element={<MainContainer />} exact/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
