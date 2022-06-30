import React, {useState} from 'react';
import './header.scss'
import {categoryBears} from "../../data/data";

const Header = () => {
    const [activeViews, setActiveViews] = useState('');
    const handleSelect = (category) => {
        setActiveViews(category);
    };

    return (
        <header className='header'>
            <nav className='header--container container'>
                <ul className='header--menu'>
                    {
                        categoryBears.map(el => (
                            <li
                                className={`header--item ${activeViews === el.searchCategory && 'active'}`}
                                key={el.id}
                                onClick={() => {handleSelect(el.searchCategory)}}
                            >
                                {el.name}
                            </li>
                        ) )
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;