import React from "react";
import { Link } from "react-router-dom";




function Home(){
    return (
        <div style={{display:"flex",marginTop:"30px"}}>
       <div style={{display:'flex',marginLeft:"200px",gap:"30px"}}>
        <Link to="/">
            <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="suman"/>
        </Link>
        <Link to="/menu" style={{color:"black"}}>Menu</Link>
        <Link to="/deals" style={{color:"black"}}>Deals</Link>
       </div>

     
       <div>
        <Link to="/login">
            <div style={{display:"flex",gap:"10px",marginLeft:"400px",marginTop:"-20px"}}>
                <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="login"/>
                <h4 style={{color:"black"}}>Sign In</h4>
            </div>
        </Link>
        <Link to="/cart">
        <div style={{display:"flex",gap:"10px",marginLeft:"600px",marginTop:"-50px"}}>
        <p style={{color:"black"}}>$ 0</p>
            <img style={{width:"50px",height:"50px"}}
            src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" 
            alt="cart"/>
            </div>
        </Link>
       </div>








        </div>
    )
}
export default Home