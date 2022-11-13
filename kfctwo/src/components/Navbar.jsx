import React from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../components/Images/Suman.png"



function Navbar(){
const [loading,setLoading]=React.useState(false)

const navigate=useNavigate()

const carthandle=()=>{
    return navigate("/cart")
}

const loginhandle=()=>{
    setLoading(true)
  
    return navigate("/login")
}

if(loading)
{
    return <h1>...Loading</h1>
}

    return (
        <div style={{display:"flex",marginTop:"30px"}}>
       <div style={{display:'flex',marginLeft:"200px",gap:"30px"
       }}>
        <Link to="/">
            <img 
           style={{width:"100px",height:"50px",marginTop:"-5px"}}
            src={logo}
            alt="suman"/>
        </Link>
        <Link to="/menu" style={{color:"black",fontWeight:"bold"}}>Menu</Link>
        <Link to="/hotdeals" style={{color:"black",fontWeight:"bold"}}>Deals</Link>
       </div>

     
       <div>
        {/* <Link to="/login"> */}
            <div style={{display:"flex",gap:"10px",marginLeft:"400px",marginTop:"0px",cursor:"pointer"}} 
            onClick={loginhandle}>
                <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="login"/>
                <h4 style={{color:"black",fontWeight:"bold"}}>Sign In</h4>
            </div>
        {/* </Link> */}

        {/* <Link to="/cart"> */}
        <div style={{display:"flex",gap:"10px",marginLeft:"600px",cursor:"pointer"}} 
        onClick={carthandle}>
        <p style={{color:"black",marginTop:"-20px",fontWeight:"bold"}}>₹ 0</p>
            <img style={{width:"50px",height:"50px",marginTop:"-30px"}}
            src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" 
            alt="cart"/>
            </div>
        {/* </Link> */}
       </div>
        </div>
    )
}
export default Navbar;