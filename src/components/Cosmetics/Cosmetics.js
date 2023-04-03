import React from 'react';
import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first = 25;
    const second = 8;
    const total = add(first,second);
    return (
        <div>
            <h2>Welcome To My Cosmetics Store</h2>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cosmetics;