import { PRODUCTS } from "../../products";
import { shopContext } from '../../context/ShopContext';
import CartItem from "./CartItem";
import { useContext } from 'react';
import './cart.css';
import {useNavigate} from 'react-router-dom';

export default function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(shopContext);
    
    const totalAmount = getTotalCartAmount();
    // Check if cart is empty
    const isEmpty = PRODUCTS.every(product => cartItems[product.id] === 0);
    
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div style={{ marginBlock: "40px" }}>
                <h1>Your Cart Items</h1>
            </div>
            <div>
                {isEmpty ? (
                    <p>Oof! Looks like there is nothing here</p>
                ) : (
                    PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem key={product.id} data={product} />;
                        }
                        return null; // Skip products with quantity 0
                    })
                )}
            </div>
            {!isEmpty && (
             <div className="checkout">
               <p>Subtotal: {totalAmount}$</p>
               <button onClick={() => navigate("/")}>Continue Shopping</button>
               <button>CheckOut</button>
             </div>
            )}
        </div>
    );
}
