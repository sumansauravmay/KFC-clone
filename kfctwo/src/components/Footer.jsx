import React from "react";
import Slick from "./Slider";
import {Link} from "react-router-dom";


function Footer(){
    
    return (
        <div style={{background:"black",marginTop:"200px"}}>

<div>
<div style={{color:"white",display:"flex"}}>
    <h1 style={{marginLeft:"100px",fontWeight:"bold",fontSize:"30px"}}>OFFERS & DEALS</h1>

    <p style={{marginLeft:"600px",fontSize:"20px",marginTop:"0px"}}>View All Deals</p>
</div>
<Slick/>

</div>


{/* //footer */}
 <div  style={{display:"flex",marginTop:"100px",color:"white",height:"200px"}}>
 <div>
 <Link to="/">
    <img style={{marginLeft:"40px",padding:"10px",marginTop:"10px"}} src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt="footerKFC"/>
    </Link>
 </div>
        <div style={{marginLeft:"100px"}}>
        <ul>
                <li>KFC Food</li>
                <Link to="/burgers">
                <li>Menu</li>
                </Link>
                <Link to="/cart">
                <li>Order Lookup</li>
                </Link>
                <li>Gift Card</li>
                <li>Nutrition & Allergen</li>
            </ul>
        </div>
            
        <div style={{marginLeft:"25px"}}>
        <ul>
                <li>Support</li>
                <li>Get Help</li>
                <li>Contact Us</li>
                <li>KFC Feedback</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div style={{marginLeft:"25px"}}>
        <ul>
                <li>Legal</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
                <li>Caution Notice</li>
            </ul>
        </div>

        <div style={{marginLeft:"25px"}}>
        <ul>
                <li>KFC India</li>
                <li>About KFC</li>
                <li>KFC Care</li>
                <li>Careers</li>
                <Link to="adminlogin">
                <li>ADMIN LOGIN</li>
                </Link>
            </ul>
        </div>

<div style={{display:"flex",marginLeft:"10px"}}>
{/* <Link to="https://www.google.com/maps"> */}
    <img style={{width:"30px",marginTop:"0px",height:"30px"}} src="https://images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg" alt="map"/>
    <p style={{fontSize:"16px",width:"80px",marginLeft:"7px"}}>Find a KFC</p>
    {/* </Link> */}
</div>

   <div style={{marginLeft:"30px"}}>
    <img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt="playstore"/>
   </div>

   <div style={{marginLeft:"30px"}}>
    <img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt="ios link"/>
   </div>   
        </div>

<div style={{display:"flex",marginTop:"20px"}}>

<p style={{color:'white',marginLeft:"400px",padding:"10px"}}>Copyright © KFC Corporation 2021 All Rights Reserved</p>

<img style={{marginLeft:"300px"}} 
src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg" alt="insta"/>

<img style={{marginLeft:"10px"}}
src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg" alt="fb"/>

<img style={{marginLeft:"10px"}}
src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg" alt=""/>
</div>

        </div>
       
    )
}
export default Footer;