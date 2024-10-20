// import React, { useState } from 'react';
// import './Form.css';
// import icons from '../Assets/маршрутки.png';

// const Form = ({ onSubmit }) => {
//     const [formData, setFormData] = useState({
//         from: '',
//         to: '',
//         date: '',
//     });

//     const handleInputChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(formData);

//         window.scrollTo({
//             top: window.innerHeight/1.5, // Прокрутка на высоту окна браузера
//             behavior: 'smooth', // Плавная прокрутка
//         });
//     };

//     return (
//         <div className="form-zakaz-container">
//             <div className="form-zakaz-content">
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="from">Откуда:</label>
//                     <select id="from" name="from" value={formData.from} onChange={handleInputChange} required>
//                         <option value="">Выберите город</option>
//                         <option value="Минск">Минск</option>
//                         <option value="Дрогичин">Дрогичин</option>
//                         <option value="Барановичи">Барановичи</option>
//                         <option value="Брест">Брест</option>
//                         <option value="Иваново">Иваново</option>
//                         <option value="Белоозёрск">Белоозёрск</option>
//                     </select>

//                     <label htmlFor="to">Куда:</label>
//                     <select id="to" name="to" value={formData.to} onChange={handleInputChange} required>
//                         <option value="">Выберите город</option>
//                         <option value="Дрогичин">Дрогичин</option>
//                         <option value="Минск">Минск</option>
//                         <option value="Барановичи">Барановичи</option>
//                         <option value="Брест">Брест</option>
//                         <option value="Иваново">Иваново</option>
//                         <option value="Белоозёрск">Белоозёрск</option>
//                     </select>

//                     <label htmlFor="date">Дата поездки:</label>
//                     <input
//                         type="date"
//                         id="date"
//                         name="date"
//                         value={formData.date}
//                         onChange={handleInputChange}
//                         required
//                     />

//                     <div className="form-zakaz-button">
//                         <button type="submit">Найти</button>
//                     </div>
//                 </form>
//             </div>
//             <img src={icons} alt="icons" />
//         </div>
//     );
// };

// export default Form;

import React, { useState } from 'react';
import './Form.css';
import icons from '../Assets/маршрутки.png';
import obmen from '../Assets/обмен.png';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        date: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.from === formData.to) {
            alert("Пункты отправления и назначения должны отличаться");
            setFormData({
                from: '',
                to: '',
                date: '',
            });
            return;
        }
        onSubmit(formData);

        window.scrollTo({
            top: window.innerHeight / 1.5, // Прокрутка на высоту окна браузера
            behavior: 'smooth', // Плавная прокрутка
        });
    };


    const swapCities = () => {
        setFormData({
            from: formData.to,
            to: formData.from,
            date: formData.date,
        });
    };

    return (
        <div className="form-zakaz-container">
            <div className="form-zakaz-content">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="from">Откуда:</label>
                    <select id="from" name="from" value={formData.from} onChange={handleInputChange} required>
                        <option value="">Выберите город</option>
                        <option value="Минск">Минск</option>
                        <option value="Дрогичин">Дрогичин</option>
                        <option value="Барановичи">Барановичи</option>
                        <option value="Брест">Брест</option>
                        <option value="Иваново">Иваново</option>
                        <option value="Белоозёрск">Белоозёрск</option>
                    </select>

                    <div className="swap-cities-button" onClick={swapCities}>
                    <img src={obmen} alt="obmen" />
                    </div>

                    <label htmlFor="to">Куда:</label>
                    <select id="to" name="to" value={formData.to} onChange={handleInputChange} required>
                        <option value="">Выберите город</option>
                        <option value="Дрогичин">Дрогичин</option>
                        <option value="Минск">Минск</option>
                        <option value="Барановичи">Барановичи</option>
                        <option value="Брест">Брест</option>
                        <option value="Иваново">Иваново</option>
                        <option value="Белоозёрск">Белоозёрск</option>
                    </select>

                    <label htmlFor="date">Дата поездки:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                    />

                    <div className="form-zakaz-button">
                        <button type="submit">Найти</button>
                    </div>
                </form>
            </div>
            <img src={icons} alt="icons" />
        </div>
    );
};

export default Form;
