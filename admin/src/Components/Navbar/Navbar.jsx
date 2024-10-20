import React from "react"
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import adminlogo from '../../assets/админ.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={navlogo} alt="" className="nav-logo" />
        <div className='nazv'>
            <p>YourRoute.by</p> <p style={{ fontSize: '20px', color: 'red' }}>Панель администратора</p>
        </div>
        <img src={adminlogo} alt="" className="admin-logo" />
    </div>
  )
}

export default Navbar