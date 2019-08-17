import {CartActionTypes} from './cart.actiontypes';

export const toggleCartHidden = () => ( { type: CartActionTypes.TOGGLE_CART_HIDDEN});

export const AddItem = item => ( { 
    type: CartActionTypes.ADD_ITEM,
    payload: item
});
//export default toggleCartHidder 