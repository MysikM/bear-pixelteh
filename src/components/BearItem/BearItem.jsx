import React from 'react';
import './bear-item.scss';
import {useNavigate} from "react-router-dom";

const BearItem = ({id, name, abv, image_url}) => {
    const navigate = useNavigate();
    const goToPageCurrentBear = () => navigate(`/bears/${id || 1}`)
    return (
        <li className='bear--item' onClick={goToPageCurrentBear}>
            <img src={image_url || 'https://images.punkapi.com/v2/2.png'} alt={name} />
            <p>{name || 'Buzz'}</p>
            <p>{abv || '7.0'}</p>
        </li>
    );
};

export default BearItem;