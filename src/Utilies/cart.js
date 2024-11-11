import toast from "react-hot-toast";

// Get all product from local storage
const getAllCart = () => {
    const all = localStorage.getItem('cart');
    
    if(all){
        const cart = JSON.parse(all)
        return cart
    }
    else{
        return []
    }
};

//add a product to local storage
const addToCart = (gadget) => {
    const cart = getAllCart(); 
    cart.push(gadget); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    toast.success('Product has been added to the cart!');
};

// remove product

const removeCart = id =>{
    const cart = getAllCart(); 
    const remainingCart = cart.filter(gadget => gadget.product_id !== id )
    localStorage.setItem('cart', JSON.stringify(remainingCart)); 
    toast.success('Product has been removed from the cart!');
};


export { addToCart, getAllCart, removeCart };
