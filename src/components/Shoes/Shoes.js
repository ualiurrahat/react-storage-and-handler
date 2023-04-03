import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 25;
    const second = 8;
    const result = multiply(first,second);
    return (
        <div>
            <h3>This is Shoe Compartment</h3>
            <p>Result:{result}</p>
        </div>
    );
};

export default Shoes;