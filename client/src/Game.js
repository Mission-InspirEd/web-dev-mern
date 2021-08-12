import React, { useState, useEffect } from 'react'

function Game(){
    const [point, setPoint] = useState(1)
    const [clicker, setClicker] = useState(0)

    const [interv, setInterv] = useState(0)

    function buyClicker() {
        if (point >= 20){
            setClicker(clicker + 1)
            setPoint(point - 20)
        }
    }

    function incrementPoints() {
        setPoint(Math.round(point + 1.4 * clicker))
    }

    useEffect(() => {
        incrementPoints()
        setTimeout(() => {
            setInterv(interv + 1)
        }, 1000);
    }, [interv])

    return (
        <div>
            <h1>{point}</h1>
            <button onClick={() => setPoint(point + 1)}>click</button>
            <p></p>
            <button onClick={buyClicker}>Buy a Clicker (20 pts; 1.4 pts/s)</button>
        </div>
    )
}

export default Game