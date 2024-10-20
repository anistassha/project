import React from 'react'
import './History.css';

const History = () => {
    return (
        <div className='cartroutes'>
            <div className='history'>История заказов</div>
            <div className="cartroutes-format-main-history">
                <p>Откуда</p>
                <p>Куда</p>
                <p>Количество</p>
                <p>Дата</p>
                <p>Время</p>
            </div>
            <hr/>
        </div>
    )
}

export default History