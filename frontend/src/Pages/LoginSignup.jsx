import React, { useState} from 'react'
import './CSS/LoginSignup.css'
import marshrutka from '../Components/Assets/маршрутка.png'

const LoginSignup = () => {

    const [state,setState] = useState("Войти");
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const [isChecked, setIsChecked] = useState(false);

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const login = async () =>{
        if (!isChecked) {
            alert("Пожалуйста, подтвердите согласие с правилами пассажирских перевозок");
            return;
        }

        console.log("Выполняется функция входа",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',          
            },
            body: JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            if (formData.email === 'nastya1@gmail.com') {
                window.location.replace("http://localhost:5173");
            } else {
                window.location.replace("/");
            }
        }
        else{
            alert(responseData.errors)
        }
    }

    const signup = async () =>{
        if (!isChecked) {
            alert("Пожалуйста, подтвердите согласие с правилами пассажирских перевозок");
            return;
        }

        console.log("Выполняется функция регистрации",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',          
            },
            body: JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
        else{
            alert(responseData.errors)
        }
    }

    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state==="Регистрация"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Логин' required/>:<></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email' required/>
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Пароль' required/>
                </div>
                <button onClick={()=>{state==="Войти"?login():signup()}}>Продолжить</button>
                {state==="Регистрация"
                ?<p className="loginsignup-login"> Уже зарегистрированы? <span onClick={()=>{setState("Войти")}}>Войти</span> </p>
                :<p className="loginsignup-login"> Создать аккаунт? <span onClick={()=>{setState("Регистрация")}}>Нажмите здесь</span> </p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                    <p>Продолжая, я соглашаюсь с правилами пассажирских перевозок.</p>
                </div>
            </div>
            <div className="loginsignup-img">
                <img src={marshrutka} alt='marshrutka' />
            </div>
        </div>
    )
}

export default LoginSignup