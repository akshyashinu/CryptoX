import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import CoinDetails from './components/CoinDetails';
import Loader from './components/Loader';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/:id" element={<CoinDetails />} />
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </Router>
  );
};

export default App;
