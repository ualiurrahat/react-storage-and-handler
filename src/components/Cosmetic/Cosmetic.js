import React from 'react';
import './Cosmetic.css'
import { addToDataBase } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    // destructuring cosmetic object
    const {name,price,id} = props.cosmetic;
  
    const addToCart =(id) =>{
    addToDataBase(id);
    }
    // function wrapper for addToCart().
    // const addToCartWrapper = () => addToCart(id);
    return (
        <div className='product'>
            <h3>Product:{name}</h3>
            <p>ID:{id}</p>
            <p>Price:${price}</p>
            {/* <button onClick={addToCartWrapper}>Add to Cart</button>
             */}
             <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;