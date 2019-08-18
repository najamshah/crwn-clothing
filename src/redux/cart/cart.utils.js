export const addItemsToCart = (cartItems, cartItemsToAdd)=> {
    const existingCatItem = cartItems.find(x=> x.id === cartItemsToAdd.id);
    if(existingCatItem){
        return cartItems.map( cartItem => 
            cartItem.id === cartItemsToAdd.id?
            {...cartItem, quantity: cartItem.quantity+1 } : 
            cartItem);
            //console.log(citems)
            //return citems;
    }
    return [...cartItems, {...cartItemsToAdd, quantity:1}]
}

export const removeItemsFromCart = (cartItems, cartItemToRemove)=> {
    const existingCatItem = cartItems.find(x=> x.id === cartItemToRemove.id);
    if(existingCatItem){
        return cartItems.map( cartItem => 
            cartItem.id === cartItemToRemove.id?
            {...cartItem, quantity: cartItem.quantity-1 } : 
            cartItem);
            //console.log(citems)
            //return citems;
    }
    return [...cartItems, {...cartItemToRemove, quantity:1}]
}