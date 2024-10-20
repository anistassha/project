import React from 'react'
import './Hello.css'
import { Link } from 'react-router-dom'; 
import doroga from '../Assets/дорога.jpg';

const Hello = () => {
    return (
        <div className='hello'>
            <img src={doroga} alt='doroga'/>
            <div className="hello-left">
                <h2>Поиск маршруток Минск-Брест</h2>
                <div className="hello-button">
                <div><Link style={{ textDecoration: 'none', color: 'white' }} to='/zakaz'>Забронировать</Link></div>
            </div>
                <h3>Бронируйте сейчас и наслаждайтесь поездкой!</h3>
            </div>
        </div>
    )
}

export default Hello