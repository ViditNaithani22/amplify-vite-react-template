
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import './NavBar.css';


export default function NavBar(){
    return(
        <div className="navbar">
            <div>
                 <Link to="/" style={{color: "white", fontSize: "22px", textDecoration: "none", marginLeft:"30px"}}><b>CutePots</b></Link>
                 
            </div>
            
            <div className='nav-items'>
                <Link to="/cart" style={{color: "white"}}>
                    <ShoppingCart size={32}/>
                 </Link>
            </div>

        </div>
    )
}