// function to manage cart data
const addToDataBase = id => {
    // taking object to store as values in localStorage 
    let shoppingCart = {};
    // get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    // if card is already being stored
    if (storedCart) {
        // card is already stored
        // assign the storedCart as properties of shoppingCart object
        shoppingCart = JSON.parse(storedCart);
    }

    //   add quantity 
    const quantity = shoppingCart[id];
    // if quantity value is truthy, product exists with given id
    if (quantity) {
        // update quantity of the product by adding up 1
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    // proudct does not exist in the local storage
    else {
        // add the object
        shoppingCart[id] = 1;
    }
    // add in the local storage 
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDataBase = id => {
    // get the cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        // convert the string from localstorage into JSON object
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            // delete product with given id
            delete shoppingCart[id];
            // set local storage 
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}
export {
    addToDataBase,
    removeFromDataBase
};