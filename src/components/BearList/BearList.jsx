import React, {useEffect, useState} from 'react';
import BearItem from "../BearItem/BearItem";
import './bear-list.scss';
import {fetchBears} from "../../store/slices/bearSlice";
import {useDispatch, useSelector} from "react-redux";
import Preload from "../Preload/Preload";
import Title from "../Title/Title";
import _ from 'lodash';

const BearList = () => {
     const dispatch = useDispatch();
     const [bearSortList, setBearSortList] = useState([]);
     const {bears, loading, error, sort} = useSelector(state => state.bear);
     useEffect(()=>{
                 dispatch(fetchBears());
             setBearSortList(bears);
         },
         []);

     useEffect(()=>{
         setBearSortList(bears);
     }, [bears])

    useEffect(()=>{
        sortBear(sort);
    },[sort])

    function sortBear(sort){
         if (sort === 'abv asc'){
             setBearSortList(
                  _.sortBy(bearSortList, [function(o) { return o.abv; }])
             );
         }
         if (sort === 'abv desc'){
             setBearSortList(
                 _.sortBy(bearSortList, [function(o) { return o.abv; }]).reverse()
             );
         }
         if (sort === 'name asc'){
             setBearSortList(
                 _.sortBy(bearSortList, [function(o) { return o.name; }])
             );

         }
         if (sort === 'name desc'){
             setBearSortList(
                 _.sortBy(bearSortList, [function(o) { return o.name; }]).reverse()
             );
         }
         if (!sort){
             setBearSortList(bears)
         }
    }
    if(loading) {
        return (<Preload/>)
    }

    if(error) {
        return <Title title={error} />
    }
    return (
        <ul className='bear--list'>
            {
                bearSortList.map(el => <BearItem key={el.id} {...el} />)
            }
        </ul>
    );
};

export default BearList;