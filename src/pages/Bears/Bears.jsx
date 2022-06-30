import React from 'react';
import './bears.scss';
import BearList from "../../components/BearList/BearList";
import Select from "../../components/Select/Select";
import {selectBears} from "../../data/data";

const Bears = () => {
    return (
        <section className='bear--container container'>
            <Select selectList={selectBears}/>
            <BearList />
        </section>
    );
};

export default Bears;