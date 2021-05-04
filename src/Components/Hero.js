import React from 'react'
import Card from './Card';

function Hero(props) {
    return (
        <section className = "hero">
            <div className = "container">
            <Card data = {props.data}/>
            </div>
        </section>
    );
};

export default Hero
