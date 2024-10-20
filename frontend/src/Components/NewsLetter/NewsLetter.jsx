import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Узнавай Об Акциях И Скидках Первым!</h1>
            <p>Подпишись на наши новости</p>
            <div>
                <input type='email' placeholder='Ваш Email' />
                <button>Подписаться</button>
            </div>
        </div>
    )
}

export default NewsLetter