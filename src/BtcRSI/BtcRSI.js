import React, { useState, useEffect } from 'react';

function BtcRSI () {
    
    const [rsiValue, setRsiValue] = useState({})
    useEffect(() => {
    fetch('https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbWJ5ODcwMUBhb2wuY29tIiwiaWF0IjoxNjQ0NTQ4OTA1LCJleHAiOjc5NTE3NDg5MDV9.uoMJzKLaYNKZOHSBVksoOKK09uuptKzMB4x5-Ui8WmI&exchange=binance&symbol=BTC/USDT&interval=1h')
    .then((response) => response.json())
    .then((value) => setRsiValue(value))
    .catch((error) => console.log(error));

    }, [])

    // console.log(rsiValue);

    
        function result(rsiValue) {
            if (rsiValue.value >= 70) {
          result = 'exit';
        } 
        else if (rsiValue.value <= 30) {
            result = 'enter';
            }
        else {
          result = 'please wait for signal';
        }
        return (
            <p>{result}</p>
            );
    }
      

    


    return (
        <div className="rsi-container">
            
            

            <div className="rsi-data">
                <p>BTC RSI Value: </p>
                <p>{rsiValue.value}</p> 
                <p>enter if value is 30 or below</p>
                <p>exit if value is 70 or above</p>
                </div>

                <div className="rsi-entry-exit">
                    <h2>{result(rsiValue)}</h2>
                </div>
        
        </div>
    );
}


// APIkey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbWJ5ODcwMUBhb2wuY29tIiwiaWF0IjoxNjQ0NTQ4OTA1LCJleHAiOjc5NTE3NDg5MDV9.uoMJzKLaYNKZOHSBVksoOKK09uuptKzMB4x5-Ui8WmI


// https://api.taapi.io/rsi?secret=MY_SECRET&exchange=binance&symbol=BTC/USDT&interval=1h

// https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbWJ5ODcwMUBhb2wuY29tIiwiaWF0IjoxNjQ0NTQ4OTA1LCJleHAiOjc5NTE3NDg5MDV9.uoMJzKLaYNKZOHSBVksoOKK09uuptKzMB4x5-Ui8WmI&exchange=binance&symbol=BTC/USDT&interval=1h






export default BtcRSI;