import React, { useState } from 'react'
import axios from 'axios'

function Home(){
    const [response, setResponse] = useState('')

    // .then
    // axios.get('/request')
    // .then((res) => setResponse(res.data))

    // async/await
    async function serverRequest() {
        const res = await axios.get('/request')
        setResponse(res.data)
    }

    serverRequest()

    return (
        <div>
            <p>home</p>
            <button onClick={() => window.location.href = '/info'}>info</button>
            <p></p>
            <button onClick={() => window.location.href = '/game'}>game</button>
            <p>{response}</p>
        </div>
    )
}

export default Home