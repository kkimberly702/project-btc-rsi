import React, { useState, useEffect, useMemo} from 'react';

function BtcRSI () {
    
    const [rsiValue, setRsiValue] = useState({})
    useEffect(() => {
    fetch('https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbWJ5ODcwMUBhb2wuY29tIiwiaWF0IjoxNjQ0NTQ4OTA1LCJleHAiOjc5NTE3NDg5MDV9.uoMJzKLaYNKZOHSBVksoOKK09uuptKzMB4x5-Ui8WmI&exchange=binance&symbol=BTC/USDT&interval=1h')
    .then((response) => response.json())
    .then((value) => setRsiValue(value))
    .catch((error) => console.log(error));

    }, [])

    console.log(rsiValue);

    
        function result(rsiValue) {
        console.log(rsiValue.value);
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
            <h2>{result}</h2>
            );
    }
      

    


    return (
        <div className="rsi-container">
            
            

            <div className="rsi-data">
                <p>BTC RSI Value: </p>
                <p>{rsiValue.value}</p> 
                </div>

                <div className="rsi-entry-exit">
                    <p>{result(rsiValue)}</p>
                </div>
        
        </div>
    );
}

// let btcRSI = 100;

// if (btcRSI >= 70 && btcRSI < 100) {
//     console.log('sell');
// };

// else if (btcRSI <= 30 && btcRSI < 0) {
//     console.log('buy');
// };

// else if (btcRSI = )

// APIkey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbWJ5ODcwMUBhb2wuY29tIiwiaWF0IjoxNjQ0NTQ4OTA1LCJleHAiOjc5NTE3NDg5MDV9.uoMJzKLaYNKZOHSBVksoOKK09uuptKzMB4x5-Ui8WmI


// https://api.taapi.io/rsi?secret=MY_SECRET&exchange=binance&symbol=BTC/USDT&interval=1h

// https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbWJ5ODcwMUBhb2wuY29tIiwiaWF0IjoxNjQ0NTQ4OTA1LCJleHAiOjc5NTE3NDg5MDV9.uoMJzKLaYNKZOHSBVksoOKK09uuptKzMB4x5-Ui8WmI&exchange=binance&symbol=BTC/USDT&interval=1h






export default BtcRSI;