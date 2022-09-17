import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

let styleLink = navData => navData.isActive ? style.active : style.item;

const NavBar = () => {
    return (
        <nav className={style.navBar}>
            <div>
                <NavLink to='/profile' className={styleLink}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to='/messenger' className={styleLink}>
                    Messages
                </NavLink>
            </div>
            <div>
                News
            </div>
            <div>
                Friends
            </div>
            <div>
                <NavLink to='/settings' className={styleLink}>
                    Settings
                </NavLink>
            </div>
            <div>
                <NavLink to='/allUsers' className={styleLink}>
                    <p>All users</p>
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
