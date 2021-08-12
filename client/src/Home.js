import React from 'react'

function Home(){
    return (
        <div>
            <p>home</p>
            <button onClick={() => window.location.href = '/info'}>info</button>
            <p></p>
            <button onClick={() => window.location.href = '/game'}>game</button>
        </div>
    )
}

export default Home