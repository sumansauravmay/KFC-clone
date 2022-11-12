import React from "react";
import '../App.css';
import Slider from "react-slick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const data=[
    {
        id:1,
        img:"https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1366&fit=fill&fm=webp"

    },
{
    id:2,
    img:"https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp"
},
    {
        id:3,
        img:"https://images.ctfassets.net/wtodlh47qxpt/Na9oR4t8WKmSjIuy5pg4U/2fef58b44c29bbb4341ed116bac84f44/KFC_Maggi__Banner__1440x396px__2_.jpg?w=1366&fit=fill&fm=webp"
    },

    {
        id:4,
        img:"https://images.ctfassets.net/wtodlh47qxpt/jxsYEVgrAX6liDnW8gxdW/17c8a5387706c5b3af41df18ab39361d/Express_pick_up_app_banner_1440x396.jpg?w=1366&fit=fill&fm=webp"
    }
]

const getData=()=>{
    return axios.get(`http://localhost:4000/register`)
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




    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true
      };

    return (
        <div>
<Navbar/>
       
{/* 1st div */}

<Slider {...settings}>
{
    data.map((item)=>(
       <div key={item.id}>
<img style={{marginTop:"50px"}}
src={item.img} alt="head"/>
       </div>
    ))
}
</Slider>

        <div style={{display:"flex"}}>  
        <h1 style={{marginLeft:"210px",fontWeight:"bolder",fontSize:"30px"}}>Welcome to KFC</h1>
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
        <h1 style={{marginLeft:"-620px",fontWeight:"bolder",fontSize:"30px",marginTop:"80px"}}>BROWSE CATEGORIES</h1>


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
        </div>
          
<Footer/>
        </div>
    )
}
export default Home