import React from 'react'

function Info(){
    return (
        <div>
            <p>info</p>
            <button onClick={() => window.location.href = '/'}>home</button>
        </div>
    )
}

export default Info