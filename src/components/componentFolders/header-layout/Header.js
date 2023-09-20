import React from 'react';
import logo from '../../../assets/images/image/logo.png';
import './Header.css';

function Header() {
    return (
        <section>
            <nav className="navbar">
                <div className="navbar-brand">
                    <button className="butn1"> احجز الان</button>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/">اتصل بنا</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">من نحن</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">الخدمات</a>
                    </li>
                    <li className="nav-item">
                        <a href="/">الرئيسية</a>
                    </li>
                </ul>

                <div className='name'>
                    <span className='stead'>ستيد   </span>
                    <span className='clean'>كلين </span>
                    <img
                        src={logo}
                        title='logo'
                        className='logo'
                    />
                </div>
            </nav>
        </section>
    );
}
export default Header;