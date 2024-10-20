import React from 'react'
import './Route.css'
import right from '../Assets/стрелкавправо.png'
import { useContext } from 'react'
import { MyContext } from '../../Context/MyContext'

const Route = (props) => {

    const {addToCart} = useContext(MyContext);

    return (
        <div className='route'>
            <div className="route_from">
                {props.from}
            </div>

            <img src={right} alt='стрелка' />

            <div className="route_to">
                {props.to}
            </div>

            <div className="time-from">
                {props.time_from}
            </div>
            
            <div className="route_date">
                {props.date}
            </div>

            <button onClick={()=>{addToCart(props.id)}}>Заказ</button>
        </div>
    )
}

export default Route