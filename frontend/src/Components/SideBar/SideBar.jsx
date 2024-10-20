import React from 'react'
import {Link} from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
        <Link to={'/cartRoutes'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <p>Корзина</p>
            </div>
        </Link>
        <Link to={'/history'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <p>История заказов</p>
            </div>
        </Link>
    </div>
    )
}

export default SideBar