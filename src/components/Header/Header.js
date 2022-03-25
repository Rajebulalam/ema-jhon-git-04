import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="logo-img" />
            <ul>
                <li className='active'><a href="/home">Home</a></li>
                <li><a href="/order">Order</a></li>
                <li><a href="/review">Order Review</a></li>
                <li><a href="/inventory">Manage Inventory</a></li>
            </ul>
        </div>
    );
};

export default Header;