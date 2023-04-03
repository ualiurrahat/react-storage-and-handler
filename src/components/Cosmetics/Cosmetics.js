import React, { useEffect, useState } from 'react';
import { add } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
const [cosmetics,setCosmetics] = useState([]);
useEffect(() =>{
    fetch('data.json')
    .then(res =>res.json())
    .then(data => setCosmetics(data))
}, [])

    return (
        <div>
            <h2>Welcome To My Cosmetics Store</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic cosmetic={cosmetic} key={cosmetic.id}></Cosmetic>)
            }

        </div>
    );
};

export default Cosmetics;