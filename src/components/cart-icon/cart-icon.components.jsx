import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden , itemsCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden} >
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemsCount}</span>
  </div>
);

const mapStateToProps = ({cart: {cartItems}})=>(
  {itemsCount: cartItems.reduce((accumalatedQuanity, cartItem) => accumalatedQuanity+cartItem.quantity
    ,0)}
)
const mapDispatchToProps = (dispatch)=>({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps) (CartIcon);