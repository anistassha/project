import React, { useState } from "react"
import './AddRoute.css'

const AddRoute = () => {

    const [routeDetails,setRouteDetails] = useState({
        city_from: "",
        city_to:"",
        date:"",
        time:""
    })

    const changeHandler = (e) =>{
        setRouteDetails({...routeDetails,[e.target.name]:e.target.value})
    }

    const Add_Route = async ()=>{
        console.log(routeDetails);
        let route = routeDetails;
        await fetch('http://localhost:4000/addroute',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(route),
        }).then((resp)=>resp.json()).then((data)=>{
            data.success?alert("Маршрут добавлен"):alert("Ошибка")
        })
    }

  return (
    <div className="add-route">
        <div className="addroute-itemfield">
            <p>Откуда</p>
            <input value={routeDetails.city_from} onChange={changeHandler} type="text" name='city_from' placeholder="Нажмите здесь" />
        </div>
        <div className="addroute-itemfield">
            <p>Куда</p>
            <input value={routeDetails.city_to} onChange={changeHandler} type="text" name='city_to' placeholder="Нажмите здесь" />
        </div>
        <div className="addroute-itemfield">
            <p>Дата</p>
            <input value={routeDetails.date} onChange={changeHandler} type="date" name="date"/>
        </div>
        <div className="addroute-itemfield">
            <p>Время</p>
            <input value={routeDetails.time} onChange={changeHandler} type="text" name='time' placeholder="Нажмите здесь" />
        </div>
        <button onClick={()=>{Add_Route()}} className="addroute-btn">Добавить</button>
    </div>
  )
}

export default AddRoute