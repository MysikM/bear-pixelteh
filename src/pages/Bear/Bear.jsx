import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './bear.scss';
import {fetchBearById} from "../../store/slices/bearSlice";
import Preload from "../../components/Preload/Preload";
import Title from "../../components/Title/Title";

// • picture
// • name
// • tagline
// • abv
// • Description (collapsed if too long)
// • food_pairing (collapsed if too long)

const Bear = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {bear, loading, error} = useSelector(state => state.bear);
    const {image_url, name, tagline, abv, description, food_pairing } = bear;
    useEffect(()=>{
            dispatch(fetchBearById(id));
        },
        [id]);

    if(loading) {
        return (<Preload/>)
    }
    if(error) {
        return <Title title={error} />
    }
    return (
        <main className="bear-item">
            <section className='bear-item--container'>
                <img className='bear-item--img' src={image_url} alt=""/>
                <div className='bear-item--info'>
                    <h2 className='bear-item--name'>{name}</h2>
                    <p><span className='bear-item--bold'>Abv:</span> {abv}</p>
                    <p><span className='bear-item--bold'>Tagline:</span> {tagline}</p>
                    <p><span className='bear-item--bold'>Description:</span> {description}</p>
                    <p><span className='bear-item--bold'>Food Pairing:</span> {food_pairing}</p>
                </div>
            </section>
            <Link className='bear-item--btn' to='/bears'>&lt; Back to list</Link>
        </main>
    );
};

export default Bear;