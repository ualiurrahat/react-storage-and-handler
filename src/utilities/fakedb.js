// function to manage cart data
const addToDataBase = id =>{
    // check if product with given key already exists or not
    const quantity = localStorage.getItem(id);

    // if quantity value is truthy, product exists with given id
    if(quantity)
    {
        console.log("already exists");
        // update quantity of the product by adding up 1
        const newQuantity = parseInt(quantity) + 1;
        // store in the localStorage
        localStorage.setItem(id,newQuantity);
    }
    // proudct does not exist in the local storage
    else{
        console.log("item added");
        // add product in the storage
        localStorage.setItem(id,1);
    }
}

export {addToDataBase};