import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    // destructuring cosmetic object
    const {name,price,id} = props.cosmetic;
    const addToCart =(id) =>{
        console.log("item added", id);
    }
    const addToCartWrapper = () => addToCart(id);
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