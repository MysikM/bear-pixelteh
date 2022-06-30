import React from 'react';
import './header.scss'
import {categoryBears} from "../../data/data";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <nav className='header--container container'>
                <ul className='header--menu'>
                    {
                        categoryBears.map(el => (
                            <NavLink
                                className='header--item'
                                key={el.id}
                                to={el.path}
                            >
                                {el.name}
                            </NavLink>
                        ) )
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;