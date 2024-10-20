import React from 'react'
import p1 from '../Assets/часы.png';
import p2 from '../Assets/скидки.png';
import p3 from '../Assets/бронь.png';
import p4 from '../Assets/билет.png';
import p5 from '../Assets/страховка.jpg';
import './Pluses.css'

const Pluses = () => {
    return (
        <div className='all'>
            <div className='text'>Наша компания предлагает широкий выбор маршрутов и услуг, чтобы сделать вашу поездку максимально приятной и безопасной!</div>
        <div className='block'>
            <div className="container">
            <img src={p1} alt='smth'/>
            <p>Выезд каждые 2 часа</p>
            </div>
            <div className="container">
            <img src={p2} alt='smth'/>
            <p>Бонусы за поездки</p>
            </div>
            <div className="container">
            <img src={p3} alt='smth'/>
            <p>Бронирование 24/7</p>
            </div>
            <div className="container">
            <img src={p4} alt='smth'/>
            <p>Командировочные билеты</p>
            </div>
            <div className="container">
            <img src={p5} alt='smth'/>
            <p>Пассажиры застрахованы</p>
            </div>
        </div>
        </div>
    )
}

export default Pluses