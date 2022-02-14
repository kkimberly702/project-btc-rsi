import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//components

import BtcRSI from './BtcRSI/BtcRSI';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Trading made easy!</h1>
        <Link to="/">
          <h2>HOME</h2>
        </Link>
        <Link to='/btcrsi'>RSI</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/btcrsi' element={<BtcRSI />} />




        </Routes>


      </main>
      
    </div>
  );
}

export default App;
