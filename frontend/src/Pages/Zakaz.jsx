// import React, { useState, useContext } from 'react';
// import { MyContext } from '../Context/MyContext';
// import './CSS/Zakaz.css';
// import Form from '../Components/Form/Form';
// import Route from '../Components/Route/Route';
// import sign from '../Components/Assets/предупреждение.png';

// const Zakaz = () => {
//     const { all_routes } = useContext(MyContext);

//     const [formData, setFormData] = useState({
//         from: '',
//         to: '',
//         date: '',
//         time: ''
//     });

//     const [formSubmitted, setFormSubmitted] = useState(false);

//     const handleFormSubmit = (data) => {
//         setFormData(data);
//         setFormSubmitted(true);
//     };

//     const filteredRoutes = all_routes.filter((route) => {
//         return (
//             route.city_from === formData.from &&
//             route.city_to === formData.to &&
//             route.date === formData.date &&
//             route.time_from === formData.time
//         );
//     });

//     return (
//         <div className='Zakaz'>
//             <Form onSubmit={handleFormSubmit} />
//             <div className="routes_for_user">
//                 {formSubmitted && (
//                     filteredRoutes.length > 0 ? (
//                         filteredRoutes.map((route, i) => (
//                             <Route
//                                 key={i}
//                                 from={route.city_from}
//                                 time_from={route.time}
//                                 to={route.city_to}
//                                 date={route.date}
//                                 id = {route.id}
//                             />
//                         ))
//                     ) : (
//                         <div className='routes_not_found'>
//                             <img src={sign} alt='знак' />
//                             <p>Рейсы на выбранную Вами дату не найдены</p>
//                         </div>
//                     )
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Zakaz;


import React, { useState, useContext } from 'react';
import { MyContext } from '../Context/MyContext';
import './CSS/Zakaz.css';
import Form from '../Components/Form/Form';
import Route from '../Components/Route/Route';
import sign from '../Components/Assets/предупреждение.png';

const Zakaz = () => {
    const { all_routes } = useContext(MyContext);

    const [formData, setFormData] = useState({
        from: '',
        to: '',
        date: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = (data) => {
        setFormData(data);
        setFormSubmitted(true);
    };

    const isDateValid = (date, time) => {
        const inputDateTime = new Date(`${date}`);
        const currentDateTime = new Date();
        return inputDateTime >= currentDateTime;
    };

    const filteredRoutes = all_routes.filter((route) => {
        return (
            route.city_from === formData.from &&
            route.city_to === formData.to &&
            route.date === formData.date
        );
    });

    filteredRoutes.sort((a, b) => {
        const timeA = a.time.split(':').map(Number);
        const timeB = b.time.split(':').map(Number);
        return (timeA[0] - timeB[0]) || (timeA[1] - timeB[1]);
    });

    return (
        <div className='Zakaz'>
            <Form onSubmit={handleFormSubmit} />
            <div className="routes_for_user">
                {formSubmitted && (
                    isDateValid(formData.date, formData.time) ? (
                        filteredRoutes.length > 0 ? (
                            filteredRoutes.map((route, i) => (
                                <Route
                                    key={i}
                                    from={route.city_from}
                                    time_from={route.time}
                                    to={route.city_to}
                                    date={route.date}
                                    id={route.id}
                                />
                            ))
                        ) : (
                            <div className='routes_not_found'>
                                <img src={sign} alt='знак' />
                                <p>Рейсы на выбранную Вами дату не найдены</p>
                            </div>
                        )
                    ) : (
                        <div className='routes_not_found'>
                            <img src={sign} alt='знак' />
                            <p>Дата некорректна</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Zakaz;

