import React, {useEffect, useRef, useState} from 'react';
import './select.scss';
import {useDispatch, useSelector} from "react-redux";
import {changeSelect} from "../../store/slices/bearSlice";

const CustomSelect = ({selectList}) => {
    const ref = useRef();
    const dispatch = useDispatch();
    const {bears} =useSelector(state => state.bear);

    const [select, setSelect] = useState(selectList[0]);
    const [isView, setIsView] = useState(false);


    const handleSelect = (item) => {
        setSelect(item);
        setIsView(false);
        dispatch(changeSelect(item.select));
    };

    useEffect(()=>{
        setSelect(selectList[0]);
    }, [bears])



    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (select && ref.current && !ref.current?.contains(e.target)) {
                setIsView(false);
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isView]);

    return (
        <div ref={ref} className='custom-select'>
            <h6 className='custom-select--title' onClick={() => {setIsView(!isView)}}>{select.name}</h6>
            <ul className={`custom-select--dropdown ${isView && 'custom-select--dropdown__open'}`}>
                {selectList.map(el => <li className={`${select === el  && 'active'}`} key={el.id} onClick={()=>{handleSelect(el)}}>{el.name}</li>)}
            </ul>
        </div>
    );
};

export default CustomSelect;