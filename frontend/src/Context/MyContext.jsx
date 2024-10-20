import React, { createContext, useState, useEffect } from 'react';
//import all_routes from '../Components/Assets/all_routes';

export const MyContext = createContext(null);

const getDefaultCart = ()=>{
    let cart={};
    for (let index = 0; index < 30+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const MyContextProvider = (props)=>{

    const [all_routes,setAll_Routes] = useState([]);
    const [cartRoutes,setCartRoutes] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allroutes')
        .then((response)=>response.json())
        .then((data)=>setAll_Routes(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart', {
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartRoutes(data));
        }
    },[])

    // const addToCart = (routeId) =>{
    //     setCartRoutes((prev)=>({...prev,[routeId]:prev[routeId]+1}));
    //     if(localStorage.getItem('auth-token')){
    //         fetch('http://localhost:4000/addtocart',{
    //             method:'POST',
    //             headers:{
    //                 Accept:'application/form-data',
    //                 'auth-token':`${localStorage.getItem('auth-token')}`,
    //                 'Content-Type':'application/json',
    //             },
    //             body:JSON.stringify({"routeId":routeId}),
    //         })
    //         .then((response)=>response.json())
    //         .then((data)=>console.log(data));
    //     }
    // }

    const addToCart = (routeId) => {
        const authToken = localStorage.getItem('auth-token');
        
        if (authToken) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "routeId": routeId }),
            })
            // .then(response => {
            //     if (!response.ok) {
            //         return response.json().then(err => { throw new Error(err.errors); });
            //     }
            //     return response.json();
            // })
            .then(data => {
                setCartRoutes((prev) => ({ ...prev, [routeId]: prev[routeId] + 1 }));
                console.log(data);
            })
            // .catch(error => {
            //     alert(error.message); // Выводим сообщение об ошибке
            // });
        } else {
            alert("Для бронирования мест необходимо пройти авторизацию"); // Сообщение, если токен отсутствует
            window.location.replace("/login");
        }
    }    

    const removeFromCart = (routeId) =>{
        setCartRoutes((prev)=>({...prev,[routeId]:prev[routeId]-1}))
        if(localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"routeId":routeId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }

    useEffect(() => {
        console.log(cartRoutes);
    }, [cartRoutes]);

    const getTotalCartRoutes = () =>{
        let totalRoutes = 0;
        for(const route in cartRoutes) {
            if(cartRoutes[route]>0) {
                totalRoutes+=cartRoutes[route];
            }
        }
        return totalRoutes;
    }

    const contextValue = {getTotalCartRoutes,all_routes,cartRoutes,addToCart,removeFromCart};

    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyContextProvider;