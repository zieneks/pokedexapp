import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
// import './styles/App.module.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>
  );
};

export default App;