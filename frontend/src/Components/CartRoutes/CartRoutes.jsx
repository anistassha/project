import React, { useContext } from 'react'
import './CartRoutes.css'
import { MyContext } from '../../Context/MyContext'
import remove_icon from '../Assets/удалить.png'
import SideBar from '../SideBar/SideBar'

const CartRoutes = () => {
    
    const {all_routes,cartRoutes,removeFromCart} = useContext(MyContext);

    return (
        <div className='cartroutes'>
            <div className='cartroutes-nazvanie'>Корзина</div>
            <div className="cartroutes-format-main">
                <p>Откуда</p>
                <p>Куда</p>
                <p>Количество</p>
                <p>Дата</p>
                <p>Время</p>
                <p>Удалить</p>
            </div>
            <hr/>

            {all_routes.map((e)=>{
                if(cartRoutes[e.id]>0) {
                    return <div>
                                <div className="cartroutes-format cartroutes-format-main">
                                    <p>{e.city_from}</p>
                                    <p>{e.city_to}</p>
                                    <button className='cartroutes-quantity'>{cartRoutes[e.id]}</button>
                                    <p>{e.date}</p>
                                    <p>{e.time}</p>
                                    <img className='cartroutes-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='remove' />
                                </div>
                                <hr/>
                            </div>
                }
                return null;
            })}
        </div>
    )
}

export default CartRoutes