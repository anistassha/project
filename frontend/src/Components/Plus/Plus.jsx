import React from 'react'
import p from '../Assets/плюсы.PNG';
import './Plus.css'

const Plus = () => {
    return (
        <div className='all'>
            <div className='text'>Наша компания предлагает широкий выбор маршрутов и услуг, чтобы сделать вашу поездку максимально приятной и безопасной!</div>
        <div className='block'>
        <img src={p} alt='smth'/>
        </div>
        </div>
    )
}

export default Plus