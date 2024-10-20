import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import icons from '../Assets/social-icons.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={logo} alt='logo' />
                <p>YourRoute.by</p>
            </div>
            {/* <ul className="footer-links">
                <li>Контакты</li>
                <li>Почему мы?</li>
                <li>Бонусы</li>
                <li>Оплата</li>
            </ul>
            <div className="footer-icons">
                <img src={icons} alt='icons' />
            </div> */}
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 - Все права защищены.</p>
            </div>
        </div>
    )
}

export default Footer