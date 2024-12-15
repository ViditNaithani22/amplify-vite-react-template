
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css";


export default function Home(){
    return(
        <div className="shop">
            <div className="shopTitle">
               <h1 style={{marginTop: "100px", fontSize: "50px"}}>CutePots</h1>
               <p style={{color: "green", fontSize: "25px"}}><b>A site where you find planters cute ! 🌱</b></p>
               <p style={{color: "grey", fontSize: "20px", marginBottom:"60px"}}>Its a personal React project hosted via AWS amplify for <a href="https://www.viditnaithani.com/">Vidit Naithani</a> Portfolio</p>
            </div>   
            <div className="products">
                  {
                    PRODUCTS.map((product)=>(
                        <Product key={product.id} data={product}/>
                    ))
                  }
            </div>
        </div>
    )
}