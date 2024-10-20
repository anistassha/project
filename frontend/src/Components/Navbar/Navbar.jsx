import React, { useContext } from 'react'
import './Navbar.css'
import logobus from '../Assets/logo.png'
import basket from '../Assets/корзина.png'
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { MyContext } from '../../Context/MyContext';

const Navbar = () => {

    const [menu,setMenu] = useState("main");
    const {getTotalCartRoutes} = useContext(MyContext);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logobus} alt='logo'/>
                <div className='nazv'>
                <p>YourRoute.by</p> <p style={{ fontSize: '20px' }}>Маршрутное такси</p>
                </div>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("main")}}><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Главная</Link>{menu==="main"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("zakaz")}}><Link style={{ textDecoration: 'none', color: 'black' }} to='/zakaz'>Забронировать</Link>{menu==="zakaz"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contacts")}}><Link style={{ textDecoration: 'none', color: 'black' }} to='/contacts'>Контакты</Link>{menu==="contacts"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Выйти</button>
                :<Link to='/login'><button>Войти</button></Link>}
                <Link to='cart'><img src={basket} alt='basket'/></Link>
                <div className="nav-cart-count">{getTotalCartRoutes()}</div>
            </div>
        </div>
    )
}

export default Navbar