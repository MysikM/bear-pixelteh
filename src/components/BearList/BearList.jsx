import React, {useEffect} from 'react';
import BearItem from "../BearItem/BearItem";
import './bear-list.scss';
import {fetchBears} from "../../store/slices/bearSlice";
import {useDispatch, useSelector} from "react-redux";
import Preload from "../Preload/Preload";
import Title from "../Title/Title";

const BearList = () => {
     const dispatch = useDispatch();
     const {bears, loading, error} = useSelector(state => state.bear);
     useEffect(()=>{
                 dispatch(fetchBears());
         },
         []);

    if(loading) {
        return (<Preload/>)
    }

    if(error) {
        return <Title title={error} />
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