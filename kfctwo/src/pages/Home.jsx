import React from "react";
import '../App.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Sliderfirst from "../components/Sliderfirst";
import Sliderfooter from "../components/Sliderfooter";

const getData=()=>{
    return axios.get(`https://wild-puce-dragonfly-belt.cyclic.app/register`)
}

function Home(){

const [user,setUser]=React.useState([])

React.useEffect(()=>{
getData()
.then((res)=>{
    console.log(res.data)
    setUser(res.data)
})
})
   
    return (
        <div>
<Navbar/>
       
{/* 1st div */}

<Sliderfirst/>
        <div style={{display:"flex"}}>  
        <h1 className="username">Welcome to KFC</h1>
        {
           user.map((el)=>(
            <h1 key={el.id}
            style={{marginLeft:"0px",fontWeight:"bolder",fontSize:"30px"}}>
            , {el.name}
        </h1>
           )) 
        }
        </div>
       
{/* 2nd div */}
        <div>
        <h1 class="browseclass">BROWSE CATEGORIES</h1>


<div className="detailsPage">
   <div>
   <Link to="hotdeals">
    <img style={{width:"800px",height:"200px"}}
    src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT115.jpg?ver=21.88" alt="img1"/>
    <h2 style={{fontSize:"20px",fontWeight:"bolder"}}>HOT DEALS</h2>
    </Link>
   </div>

<div style={{marginLeft:"15px"}}>
<Link to="/chicken">
<img style={{width:"800px",height:"200px"}}
src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT116.jpg?ver=21.88" alt="img2"/>
    <h2 style={{fontSize:"20px",fontWeight:"bolder"}}>CHICKEN BUCKETS</h2>
    </Link>
</div>

<div style={{marginLeft:"15px"}}>
<Link to="/chicken">
<img style={{width:"800px",height:"200px"}}
src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT201.jpg?ver=21.88" alt="img1"/>
    <h2 style={{fontSize:"20px",fontWeight:"bolder"}}>HOT LUNCHES</h2>
    </Link>
</div>

<div style={{marginLeft:"15px"}}>
<img style={{width:"800px",height:"200px"}}
src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT84.jpg?ver=21.88" alt="img1"/>
    <h2 style={{fontSize:"20px",fontWeight:"bolder"}}>BOX MEALS</h2>
</div>

<div style={{marginLeft:"15px"}}>
<Link to="/burgers">
<img style={{width:"800px",height:"200px",marginTop:"70px"}}
 src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=21.88" alt="img1"/>
    <h2 style={{fontSize:"20px",fontWeight:"bolder"}}>BURGERS</h2>
    </Link>
</div>

<div style={{marginLeft:"15px"}}>
<Link to="/biryani">
<img style={{width:"800px",height:"200px",marginTop:"70px"}}
src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT189.jpg?ver=21.88" alt="img1"/>
    <h2 style={{fontSize:"20px",fontWeight:"bolder"}}>BIRYANI BUCKETS</h2>
    </Link>
</div>

<div style={{marginLeft:"15px"}}>
<img style={{width:"800px",height:"200px",marginTop:"70px"}}
src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT175.jpg?ver=21.88" alt="img1"/>
    <h2 style={{fontSize:"20px",fontWeight:"bolder"}}>SNACK</h2>
</div>

<div style={{marginLeft:"15px"}}>
<img style={{width:"800px",height:"200px",marginTop:"70px"}}
src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg" alt="img1"/>
    <h2 style={{fontSize:"20px",fontWeight:"bolder"}}>VIEW ALL MENU</h2>
</div>

</div>
<Sliderfooter/>
        </div>
        
<Footer/>
        </div>
    )
}
export default Home