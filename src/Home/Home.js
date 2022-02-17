import React  from "react";
import BtcRSI from "../BtcRSI/BtcRSI";

function Home() {
    return (
      <div className="container1">
        <div className="box-title"><p>Easy Trade Signals using indicators</p>
      </div>
       
        

        <div className="box-info">
        <p>Relative Strength index (RSI)</p>
        <p>Moving Average Convergence Divergence (MACD) -Coming soon-</p>

        <div className="rsi-info">
                <p>What is the Relative Strength Index or RSI?</p><br></br>
                <p>The RSI is a momentum oscillator that is used to indentify market trends. </p> 
            </div>

            <div className="rsi-how-info">
                <p>How to trade using the RSI?</p><br></br>
                <p>To enter a trade, the value of the RSI should be at 30 or below.</p>
                <p>To exit a trade, the value of the RSI should be at 70 or above.</p> 
            </div>

            <div className="rsi-link">
            Go to RSI Page!
            </div>

        </div>
      </div>
    );
}

export default Home;
