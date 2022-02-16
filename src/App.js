import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//components

import BtcRSI from './BtcRSI/BtcRSI';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#" to="/home">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Bitcoin</a>
        <Link className="nav-link active" href="#" to='/btcrsi'>RSI</Link>
      </div>
    </div>
  </div>
</nav>

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/btcrsi' element={<BtcRSI />} />




        </Routes>


      </main>

      <footer>
        <p>Disclaimer: This is not financial advice. I am not a financial advisior. The signals provided have not been tested.</p>
      </footer>
      
    </div>
  );
}

export default App;
