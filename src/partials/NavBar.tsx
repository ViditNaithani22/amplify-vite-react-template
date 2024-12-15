
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import './NavBar.css';
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function NavBar(){
    
    const {signOut} = useAuthenticator();

    return(
        <div className="navbar">
            <div>
                 <Link to="/" style={{color: "white", fontSize: "22px", textDecoration: "none", marginLeft:"30px"}}><b>CutePots</b></Link>
                 
            </div>

            
                  
            
            
            <div className='nav-items'>

                <b  onClick={signOut} style={{color: "white", fontSize: "22px", textDecoration: "none", marginRight:"30px", cursor: "pointer"}}>Sign Out</b>

                <Link to="/cart" style={{color: "white"}}>
                    <ShoppingCart size={32}/>
                 </Link>
            </div>

        </div>
    )
}