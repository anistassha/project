import React from 'react'
import Hello from '../Components/Hello/Hello'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Pluses from '../Components/Pluses/Pluses'

const Glavnaya = () => {
    return (
        <div>
            <Hello/>
            <Pluses/>
            <NewsLetter/>
        </div>
    )
}

export default Glavnaya