
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./partials/NavBar";
import { ShopContextProvider } from "./context/ShopContext";
import Home from "./views/home/Home";
import Cart from "./views/cart/Cart";

const client = generateClient<Schema>();

function App() {
  return (
    <>
      <div className="App">
        <ShopContextProvider>
         <Router>
           <NavBar />
           <Routes>
             <Route path="/"  element={<Home/>}/>
             <Route path="/cart" element={<Cart/>}/>
           </Routes>
         </Router>
        </ShopContextProvider> 
      </div>
     
    </>
  );
}

export default App;
