import React from 'react';
import './bears.scss';
import BearList from "../../components/BearList/BearList";

const Bears = () => {
    return (
        <section className='bear--container container'>
            <BearList />
        </section>
    );
};

export default Bears;