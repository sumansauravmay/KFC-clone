import axios from "axios";
import React from "react";
import {CartContext} from "../Context/CartContext/CartContextProvider";
   import {addToCart} from "../Context/CartContext/action";
// import {Button} from "@chakra-ui/react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const getData=()=>{
   return axios.get(`https://wild-puce-dragonfly-belt.cyclic.app/Biryani`)
}

function Biryani(){
    const [data,setData]=React.useState([])
    const [loading,setLoading]=React.useState(false)

    

React.useEffect(()=>{
    setLoading(true)
    getData()
    .then((res)=> {
    setData(res.data)
     console.log(res.data)
     setLoading(false)
    })
},[])

const {dispatch}=React.useContext(CartContext)



if(loading)
{
 return <img 
 style={{marginLeft:"400px",widht:"200px",height:"500px"}} 
 src="https://online.kfc.co.in/KFC_Loader_Gif.gif" alt="loading"/>
}


    return (
        <div>
        <Navbar/>

         <h1 className="headingprod">BIRYANI BUCKETS</h1>
        <div className="burgerItem">
       
            {
                data.map((item)=>(
                    <div key={item.id} className="boxsingleBurger"
                    
                    >

                        <img className="imgprod"
                        src={item.img} alt="burgers"/>

                        <h1 style={{marginTop:"30px",fontWeight:"bolder"}}>{item.title}</h1>

                        <h2 style={{fontWeight:"bolder",marginTop:"10px"}}>₹ {item.price}</h2>

                        <p className="proddescrip">{item.description}</p>

                        <button style={{width:"140px",background:"red",color:"white",height:"50px",
                        padding:"10px",borderRadius:"20px",marginTop:"20px",marginBottom:"15px"}}
                         onClick={()=>dispatch(addToCart(item))}
                        >Add To Cart</button>

                    </div>
                ))
            }
        </div>
        <Footer/>
        </div>
    )
}
export default Biryani;