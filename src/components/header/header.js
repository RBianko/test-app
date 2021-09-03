import React from "react";
import './header.css';
import {NavLink} from "react-router-dom";
import { selectUser } from '../redux/reducers/userSlice';
import { useSelector } from "react-redux"

const Header = () => {
    const user = useSelector(selectUser);

    return (
        <header className="header">
            <div className="header__wrapper">
                <nav className="menu">
                    <ul>
                        <li><NavLink to="/">Main</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/profile">Profile</NavLink></li>
                        <li><NavLink to="/info">Info</NavLink></li>
                        <li><NavLink to="/calendar">Calendar</NavLink></li>
                    </ul>
                </nav>
                <div className="login_name highlight">
                {user.isLoggedIn ? user.user.username : "Guest"}
                </div>
            </div>
        </header>
    )
}

export default Header;