import React from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../components/Images/Suman.png";
import '../App.css';



function Navbar(){
const [loading,setLoading]=React.useState(false)


let userdata=JSON.parse(localStorage.getItem("signin"))||"";
console.log(userdata)

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

const logoutfunc=()=>{
    localStorage.removeItem("signin")
  window.location.reload()
  
}

    return (
        <div className="navbarhead">
       <div className="insidenavleft">
        <Link to="/">
            <img className="navbarleftlogo"
            src={logo}
            alt="suman"/>
        </Link>
        <Link to="/menu" style={{color:"black",fontWeight:"bold"}}>Menu</Link>
        <Link to="/hotdeals" style={{color:"black",fontWeight:"bold"}}>Deals</Link>
       </div>

       <div>
    <button onClick={logoutfunc}
    style={{marginLeft:"20px",fontWeight:"bolder"}}>{userdata?"Logout":""}</button>
</div>

       <div>

        
            <div className="signinbtn" 
            onClick={loginhandle}>
                <img src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg" alt="login"/>
                <h4 style={{color:"black",fontWeight:"bold"}}>{userdata?userdata:"Sign in"}</h4>
            </div>
       
       
        <div className="navbarcart"
        onClick={carthandle}>
        <p style={{color:"black",marginTop:"-20px",fontWeight:"bold"}}>₹ 0</p>
            <img style={{width:"50px",height:"50px",marginTop:"-30px"}}
            src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" 
            alt="cart"/>
            </div>
        
       </div>
        </div>
    )
}
export default Navbar;