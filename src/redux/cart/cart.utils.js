export const addItemsToCart = (cartItems, cartItemsToAdd)=> {
    const existingCatItem = cartItems.find(x=> x.id === cartItemsToAdd.id);
    if(existingCatItem){
        return cartItems.map( cartItem => 
            cartItem.id === cartItemsToAdd.id?
            {...cartItems, quantity: cartItem.quantity+1 } : 
            cartItem);
    }
    return [...cartItems, {...cartItemsToAdd, quantity:1}]
}