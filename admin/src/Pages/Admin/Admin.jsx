import React from "react"
import './Admin.css'
import Sidebar from "../../Components/Sidebar/Sidebar"
import {Routes, Route} from 'react-router-dom'
import AddRoute from "../../Components/AddRoute/AddRoute"
import AllRoutes from "../../Components/AllRoutes/AllRoutes"

const Admin = () => {
  return (
    <div className="admin">
        <Sidebar/>
        <Routes>
            <Route path='/addroute' element={<AddRoute/>}/>
            <Route path='/allroutes' element={<AllRoutes/>}/>
        </Routes>
    </div>
  )
}

export default Admin