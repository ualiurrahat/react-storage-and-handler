import React from 'react';

const Cosmetic = (props) => {
    // destructuring cosmetic object
    const {name,price,id} = props.cosmetic;
    return (
        <div>
            <h3>Product:{name}</h3>
            <p>ID:{id}</p>
            <p>Price:${price}</p>
        </div>
    );
};

export default Cosmetic;