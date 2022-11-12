import React, { useContext } from "react";
import '../App.css';
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { checkout,removeFromCart } from "../Context/CartContext/action";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Cart = () => {


  const {state,dispatch}=useContext(CartContext)
  
  

 const handleCheckOut=()=>{

alert("Your order has been placed!!")


    dispatch(checkout())


 }

  return (
<div>
<Navbar/>
<div className="cartStyle">
{
    state.map((cart)=>(
      <div key={cart.id} className="indiCart">
      <img style={{width:"400px",height:"300px",marginLeft:"150px",marginTop:"80px"
     
      }}
      src={cart.img} alt="cartpic"/>
        <h4 style={{fontWeight:"bold",marginTop:"20px"}}>{cart.title}</h4>
        <p style={{fontWeight:"bold",marginTop:"20px"}}> ₹ {cart.price}</p>
        <button style={{width:"100px",background:"black",color:"white",height:"30px",
        borderRadius:"20px",marginTop:"20px",marginBottom:"10px"}}
         onClick={()=>dispatch(removeFromCart(cart.id))}>Remove</button>
      </div>
      
    ))
  }
</div>
 

<div style={{marginLeft:"1000px",marginTop:"100px",display:"flex",fontWeight:"bold"}}>
<h2>Payable Amount :</h2>
  {
    
    state.reduce((a,c)=>a+c.price,0)
    
  }
</div>

  <button style={{width:"100px",background:"black",margin:"200px",color:"white",
  marginLeft:"60px",height:"40px",borderRadius:"30px"}} 
  onClick={handleCheckOut}
  >Placed</button>

<Footer/>



  </div>
  ) 
  
};

export default Cart;