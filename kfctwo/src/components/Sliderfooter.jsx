import React from 'react'
import { Box,Image,Text } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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
      style={{ ...style,display: "block", background: "grey",marginRight:"25px",borderRadius:"50px",
      marginTop:"60px",
      paddingTop:"12px",width:"40px",height:"40px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey",marginLeft:"25px",borderRadius:"50px",
      marginTop:"60px",
      paddingTop:"12px",width:"40px",height:"40px"}}
      onClick={onClick}
    />
  );
}



const Sliderfooter = () => {
 


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
    <div class="firstdiv">
    <Slider {...settings}>
  {
    data.map((item)=>(
    <Box key={item._id}  h="250px" mt="200px"
    //  boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
     >
    <Box  boxSize='300px' mt="5px"
     ml={{base:"70px",md:"75px",lg:"75px"}}
    >
    <Image
  width={{base:"250px",md:"300px",lg:"300px"}}
  height={{base:"250px",md:"200px",lg:"200px"}}
// margin={{md:"auto"}}
  src={item.image} alt='Dan Abramov' />
</Box>

<Box h="35px">
<Text color="black"
ml={{base:"100px",md:"120px",lg:"135px"}}
width={{base:"180px",md:"160px",lg:"200px"}}
height={{base:"100px",md:"120px",lg:"100px"}}
fontSize={{base:"25px",md:"25px",lg:"30px"}}
mt={{base:"-30px",md:"-85px",lg:"-85px"}}
>{item.title}</Text>
</Box>


<Text color="black" fontSize={30}
ml={{base:"130px",md:"115px",lg:"125px"}}
width={{base:"120px",md:"160px",lg:"215px"}}
mt={{base:"10px",md:"5px",lg:"15px"}}
>{item.des}</Text>

    </Box>
    
    ))
  }
</Slider>
  </div>
  </div>
  )
}

export default Sliderfooter;

