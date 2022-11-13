import React from "react";
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import {Alert} from "@chakra-ui/react"


const data=[
    {
        id:1,
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg",
        "description":"1 Pc free Veg Zinger on a cart value of 499 or above on first order. Only for registered users",
        title:"view details",
        des:"Redeem"
    },

    {
        id:2,
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/VEGZINGER.jpg",
        description:"Add 2 Pc Hot n Crispy Chicken @ just Rs 99 on min cart value of Rs 499 or more. Applicable on 1st order for signed in user.",
        title:"view details",
        des:"Redeem"
    },

    {
        id:3,
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg",
        "description":"Upto Rs 100 off on min cart value of Rs 599 or more . Applicable on 4th order onwards for signed in user.",
        title:"view details",
        des:"Redeem"
    },

    {
        id:4,
        image:"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/BIGSAVE.jpg",
        "description":"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users.",
        title:"view details",
        des:"Redeem"
    }
]



function SampleNextArrow(props) {
    const { className, style, onClick } = props;


    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey",marginRight:"60px",
        marginTop:"5px",padding:"0px",borderRadius:"20px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props2) {
    const { className2, style2, onClick2 } = props2;
    return (
      <div
        className={className2}
        style={{ ...style2, display: "block", background: "black",marginLeft:"-30px" }}
        onClick={onClick2}
      />
    );
  }


function Slick(){


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div>
      
<div>
<Slider {...settings}>
{
        data.map((item)=>(
            <div key={item.id} className="detailsCol">
            <img className="imagest" src={item.image} alt="offers"/>
<div style={{background:"white",marginTop:"-15px",width:"300px",height:"150px"}}>
            <div style={{background:"white"}}>
            <p style={{width:"300px",marginTop:"15px"}}>{item.description}</p>
            </div>
           
            <div style={{display:"flex",background:"white"}}>

            <p style={{marginLeft:"30px",marginTop:"30px"}} onClick={()=>
            alert(`${item.description}`)
            }>{item.title}</p>

            <button 
            style={{borderRadius:"30px",width:"100px",marginTop:"30px",marginLeft:"70px"}}>
            {item.des}</button>
            </div>
            </div>
            </div>
        ))
    }
</Slider>
   
</div>
        </div>
    )
}

export default Slick;