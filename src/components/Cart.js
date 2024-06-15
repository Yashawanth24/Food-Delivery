
import React, { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ItemList from './ItemsList'
import { clearCart, setCartTotal } from './cartSlice';
import { useNavigate } from "react-router-dom";

import { CartContext } from './cartContext';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigator=useNavigate();
  const {setTotalPrice}=useContext(CartContext)
  const handleClearcart = () => {
    dispatch(clearCart());
  };
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.card.info.price / 100;
  }, 0);
  
  setTotalPrice(totalPrice);
  return (
    <div className="text-center m-4 p-4">
      <h1 style={{fontSize: '1.875rem',
    lineHeight: '2.25rem'/* 36px */}} className="text-3xl font-bold">Cart</h1>
      <div style={{ width: '50%', paddingTop: "8px",alignItems: "center", margin: "auto" }}>
        <button style={{ paddingTop: "2px", margin: "4px", background: "black", color: "white", border: "rounded" }}
          onClick={handleClearcart}
        >Clear Cart</button>
        <ItemList items={cartItems} showAddButton={false} />
      </div>
      <div>
        <p>
          Total Price: ₹ {totalPrice.toFixed(2)}
        </p>
      </div>
      {cartItems.length>0 && (
        
        <button className=" border border-black text-white font-bo px-4 py-2 my-6 "style={{background:"green"}} onClick={()=>navigator('/payment')}>
         Place Your Order
      </button>
      )}
    </div>
  );
};

export default Cart;