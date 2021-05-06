import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import Card from './Card';


const Hero = ({data}) => {
    return (
        <section className = "hero">
            <div style= {{backgroundColor:"#40538a", width:"800px"} } className = "container">
            <Card data = {data}/>
            </div>
        </section>
    );
};

export default Hero
