import React, { useState, useEffect } from "react"
import './AllRoutes.css'
import cross_icon from '../../assets/delete.png'

const AllRoutes = () => {

  const [allroutes,setAllRoutes] = useState([]);

  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allroutes')
    .then((res)=>res.json())
    .then((data)=>{setAllRoutes(data)});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_route = async (id)=>{
    await fetch('http://localhost:4000/removeroute',{
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className="all-routes">
      <h1>Все маршруты</h1>
      <div className="allroutes-format-main">
        <p>Откуда</p>
        <p>Куда</p>
        <p>Дата</p>
        <p>Время</p>
        <p>Удалить</p>
      </div>
      <div className="allroutes-all">
        <hr />
        {allroutes.map((route,index)=>{
          return <>
           <div key={index} className="allroutes-format-main allroutes-format">
            <p>{route.city_from}</p>
            <p>{route.city_to}</p>
            <p>{route.date}</p>
            <p>{route.time}</p>
            <img onClick={()=>{remove_route(route.id)}} className="allroutes-remove-icon" src={cross_icon} alt="" />
           </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default AllRoutes