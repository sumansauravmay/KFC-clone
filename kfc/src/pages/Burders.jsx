import axios from "axios";
import React from "react";
// import {Button} from "@chakra-ui/react";
import "../App.css";
import Navbar from "../components/Navbar";

function Products(){
    const [data,setData]=React.useState([])
    const [loading,setLoading]=React.useState(false)

React.useEffect(()=>{
    setLoading(true)
    return axios.get(`http://localhost:4000/Burgers`)
    .then((res)=> {
    setData(res.data)
    // console.log(res.data)
     setLoading(false)
    })
},[])

if(loading)
{
    return <h1>...Loading</h1>
}


    return (
        <div>
        <Navbar/>

         <h1 style={{fontWeight:"bolder",marginTop:"50px",padding:"20px",fontSize:"30px",marginLeft:"-1000px"}}>BURGERS</h1>
        <div className="burgerItem">
       
            {
                data.map((item)=>(
                    <div key={item.id} className="boxsingleBurger"
                    
                    >

                        <img style={{marginTop:"50px",width:"300px",marginLeft:"70px"}}
                        src={item.img} alt="burgers"/>

                        <h1 style={{marginTop:"30px",fontWeight:"bolder"}}>{item.title}</h1>

                        <h2 style={{fontWeight:"bolder",marginTop:"10px"}}>₹ {item.price}</h2>

                        <p style={{width:"300px",marginLeft:"70px"}}>{item.description}</p>

                        <button style={{width:"140px",background:"red",color:"white",height:"50px",
                        padding:"10px",borderRadius:"20px",marginTop:"20px",marginBottom:"15px"}}
                        >Add To Cart</button>

                    </div>
                ))
            }
        </div>
        </div>
    )
}
export default Products;