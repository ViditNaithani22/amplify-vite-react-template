
import { useContext } from 'react';
import {shopContext} from '../../context/ShopContext'

export default function Product(props){
    const {id, productName, price, productImage, description, link} = props.data;
    const { addToCart, cartItems } = useContext(shopContext);

    function view(){
        alert(description);
    }
    
    
    const cartItemAmount = cartItems[id];
    return(
        <div className="product">
            <img src={productImage} style={{height: "400px", width: "300px"}}/>
            <div className="description">
                  <p>
                     <b>{productName}</b>
                  </p>
                  <p>
                     <b>${price}</b>
                  </p>
                  <p>
                     <button onClick={view}>view description</button>
                  </p>
                  <p style={{marginTop: "10px"}}>
                     <a href={link}>original source</a>
                  </p>
                  <button style={{marginTop: "10px"}} className="addToCart"  onClick={()=> addToCart(id)}>
                    Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
                  </button>
            </div>
        </div>
    )
}