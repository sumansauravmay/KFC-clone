import React, { useContext } from "react";
import '../App.css';
import { Box, Text, Flex, Button, Image, Center } from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { checkout,removeFromCart } from "../Context/CartContext/action";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link,useNavigate } from 'react-router-dom';


const Cart = () => {
  const {state,dispatch}=useContext(CartContext);
  const navigate=useNavigate()
  

 const handleCheckOut=()=>{

alert("Your order has been placed!!")


    dispatch(checkout())
    
    navigate("/")

 }

 const totalamount=state.reduce((a,c)=>a+c.price,0).toFixed(2)
localStorage.setItem("amount",JSON.stringify(totalamount))


  return (
<div>
<Navbar/>
<div className="cartStyle">
{
    state.map((cart)=>(
      <div key={cart.id} className="indiCart">
      <img className="cartimg"
      src={cart.img} alt="cartpic"/>
        <h4 className="carttitle">{cart.title}</h4>
        <p className="cartprice"> ₹ {cart.price}</p>
        <button className="cartremove"
         onClick={()=>dispatch(removeFromCart(cart.id))}>Remove</button>
      </div>
      
    ))
  }
</div>
<Box>
        <Box
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          w="400px"
          p="15px"
          m="auto"
          h="180px"
        >
          <Box>
            <Flex justifyContent="space-between" fontSize={12} p="10px">
              <Text>Item Total(MRP)</Text>
              <Text>₹ {+totalamount}</Text>
            </Flex>
          </Box>
          <hr></hr>
          <Box>
            <Flex justifyContent="space-between" fontSize={12} p="10px">
              <Text>Shipping Fee</Text>
              <Text>₹ 100</Text>
            </Flex>
          </Box>
          <hr></hr>
          <Box>
            <Flex justifyContent="space-between" fontSize={12} p="10px">
              <Text>To be paid</Text>
              <Text>₹ {+totalamount + 100}</Text>
            </Flex> 
          </Box>

        </Box>
        
        <Button
          w="100%"
          bg="#FF6F61"
          width="400px"
          m="auto"
          mt="10px"
          _hover={{}} 
          onClick={handleCheckOut}
        >
          <Text fontWeight={500} color={"white"}>PAY ₹ {+totalamount + 100}</Text>
        </Button>
        


      </Box>





<Footer/>



  </div>
  ) 
  
};

export default Cart;