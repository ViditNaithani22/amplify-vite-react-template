
import {shopContext} from '../../context/ShopContext'

import { useContext } from 'react';

export default function CartItem(props){
    const {id, productName, price, productImage, description, link} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(shopContext);
    return(
        <div className="cartItem">
            <img src={productImage}/>
            <div className="description">
                  <p style={{fontSize:"25px", textAlign:"center"}}>
                     <b>{productName}</b>
                  </p>
                  <p style={{fontSize:"20px", color: "green", textAlign:"center"}}>
                     <b>${price}</b>
                  </p>
                  <p style={{width:"80%", marginLeft:"40px"}}>
                     {description}
                  </p>
                  <div className="countHandler" style={{marginTop: "15px", textAlign:"center"}}>
                       <button onClick={() => removeFromCart(id)}>-</button>
                       <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)}/>
                       <button onClick={() => addToCart(id)}>+</button>
                  </div>
            </div>    
            
        </div>
    )
}