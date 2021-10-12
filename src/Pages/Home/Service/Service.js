import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    // const {Service} = props 
    const { name, description, price, img } = service
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>price: {price}</h5>
            <p className="px-3">{description}</p>
        </div>
    );
};

export default Service;