import React, {useEffect} from 'react';
import BearItem from "../BearItem/BearItem";
import './bear-list.scss';
import {fetchBears} from "../../store/slices/bearSlice";
import {useDispatch, useSelector} from "react-redux";
import Preload from "../Preload/Preload";

const BearList = () => {
     const dispatch = useDispatch();
     const {bears, loading} = useSelector(state => state.bear);
     useEffect(()=>{
                 dispatch(fetchBears());
         },
         []);

    if(loading) {
        return (<Preload/>)
    }

    return (
        <ul className='bear--list'>
            {
                bears.map(el => <BearItem key={el.id} {...el} />)
            }
        </ul>
    );
};

export default BearList;