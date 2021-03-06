import React, { useEffect, useState } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//components
import './App.css';
import BtcRSI from './BtcRSI/BtcRSI';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import BitcoinPage from './BitcoinPage/BitcoinPage';



function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" href="#" to='/btcrsi/:value'>RSI</Link>
        <a className="nav-link active" aria-current="page" href="#">MACD</a>
        <Link className="nav-link active" href="#" to='/bitcoin'>Bitcoin Price</Link>
        
      </div>
    </div>
  </div>
</nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/btcrsi/:value' element={<BtcRSI />} />
          <Route path='/rsi' element={<Navigate to='/btcrsi/:value'/>} />
          <Route path='/bitcoin' element={<BitcoinPage />} />




        </Routes>


      </main>
      <Footer/>

      
    </div>
  );
}

export default App;
