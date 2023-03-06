import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";

const data=[
    {
        id:1,
        image:"https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1366&fit=fill&fm=webp"
    },

    {
        id:2,
        image:"https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp"
    },

    {
        id:3,
        image:"https://images.ctfassets.net/wtodlh47qxpt/Na9oR4t8WKmSjIuy5pg4U/2fef58b44c29bbb4341ed116bac84f44/KFC_Maggi__Banner__1440x396px__2_.jpg?w=1366&fit=fill&fm=webp"
    },

    {
        id:4,
        image:"https://images.ctfassets.net/wtodlh47qxpt/jxsYEVgrAX6liDnW8gxdW/17c8a5387706c5b3af41df18ab39361d/Express_pick_up_app_banner_1440x396.jpg?w=1366&fit=fill&fm=webp"
    }
]

function Sliderfirst(){

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <div>
      
<div style={{marginTop:"80px"}}>
<Slider {...settings}>
{
        data.map((item)=>(
            <Box key={item.id}>
            <img style={{width:"100%"}} src={item.image} alt="offers"/>
            </Box>
        ))
    }
</Slider>
</div>
 
        </div>
    )
}

export default Sliderfirst;
