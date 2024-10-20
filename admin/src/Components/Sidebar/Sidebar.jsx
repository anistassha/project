import React from "react"
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_route_icon from '../../assets/добавитьмаршрут.png'
import all_routes_icon from '../../assets/всемаршруты.png'

const Sidebar = () => {
  return ( 
    <div className="sidebar">
        <Link to={'/addroute'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={add_route_icon} alt="" className="" />
                <p>Добавить Маршрут</p>
            </div>
        </Link>
        <Link to={'/allroutes'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={all_routes_icon} alt="" className="" />
                <p>Все Маршруты</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar