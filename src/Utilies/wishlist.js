import toast from "react-hot-toast";

// get all product from local storage
const getAllWishList = ()=>{
    const all = localStorage.getItem('wishes')

    if(all){
        const wishes = JSON.parse(all)
        return wishes
    }else{
        return []
    }
}

//add a product to local storage
const wishList = gadget=> {
    const wishes = getAllWishList()
    const isExist = wishes.find(item => item.product_id === gadget.product_id)
    if(isExist) return toast.error('Product had already added to WishList!')
    wishes.push(gadget)
    localStorage.setItem('wishes', JSON.stringify(wishes))
    toast.success('Product has successfully added to WishList!')
}
//remove a product from local storage
const removewish = id =>{
    const wishes = getAllWishList(); 
    const remainingWish = wishes.filter(gadget => gadget.product_id !== id )
    localStorage.setItem('wishes', JSON.stringify(remainingWish)); 
    toast.success('Product has been removed from wishlist!');
};

export { wishList, getAllWishList, removewish }