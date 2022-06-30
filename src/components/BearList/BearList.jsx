import React, {useEffect} from 'react';
import BearItem from "../BearItem/BearItem";
import './bear-list.scss';
import {fetchBears} from "../../store/slices/bearSlice";
import {useDispatch, useSelector} from "react-redux";

const BearList = () => {
     const dispatch = useDispatch();
     const {bears} = useSelector(state => state.bear);
     useEffect(()=>{
                 dispatch(fetchBears());
         },
         []);
    return (
        <ul className='bear--list'>
            {
                bears.map(el => <BearItem key={el.id} {...el} />)
            }
        </ul>
    );
};

export default BearList;