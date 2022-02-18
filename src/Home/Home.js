import React  from "react";
import BtcRSI from "../BtcRSI/BtcRSI";
import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="container1">

        
        <div className="box-title">
        <p>Easy Trade Signals using Indicators</p>
        </div>
      

        <div className="box-info">
        <p>Relative Strength index (RSI)</p>
        </div>

{/* RSI Boxes */}

        <div className="rsi-info">
                <p className="question">What is the Relative Strength Index or RSI?</p><br></br>
                <p>The RSI is a momentum oscillator that helps indentify buying and selling pressure.</p> 
        </div>

        
        <div className="rsi-how-info">
                <p className="question">How to trade using the RSI?</p><br></br>
                <p>To enter a trade, the value of the RSI should be at 30 or below.</p>
                <p>To exit a trade, the value of the RSI should be at 70 or above.</p> 
        </div>


        <div className="rsi-link">
            
            <Link className="nav-link active" href="#" to='/btcrsi/:value'>Go to RSI Value!</Link>
        </div>


{/* MACD Boxes */}

        <div className="box-info2">
        <p>Moving Average Convergence Divergence (MACD)</p>
        </div>

        <div className="macd-info">
                <p className="question">What is the Moving Average Convergence Divergence or MACD?</p><br></br>
                <p>The MACD is a momentum oscillator that uses two moving averages that helps identify support and resistance levels.</p> 
        </div>

        
        <div className="macd-how-info">
                <p className="question">How to trade using the MACD?</p><br></br>
                <p>To enter a trade, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>To exit a trade, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
        </div>


        <div className="macd-link">
            Please subscribe to access the MACD Page!
        </div>

    </div>
      
    );
}

export default Home;
