import React from "react";
import {Link} from "react-router-dom";
import {FormControl,FormLabel,Input,Button,Select} from "@chakra-ui/react";
import { AppContest } from "../Context/authContext/AuthContextProvider";


function AdminPage(){
const {authState,logoutUser}=React.useContext(AppContest)

    return (
        <div>
        <div style={{display:"flex",marginTop:"30px"}}>
       <div style={{display:'flex',marginLeft:"300px",gap:"30px"
       }}>
        <Link to="/">
            <img 
            src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" 
            alt="suman"/>
        </Link>
        <Link to="/menu" style={{color:"black",fontWeight:"bold",marginLeft:"20px"}}>Menu</Link>
        <Link to="/hotdeals" style={{color:"black",fontWeight:"bold",marginLeft:"20px"}}>Hot Deals</Link>
       </div>
       <Link to="/chicken" style={{color:"black",fontWeight:"bold",marginLeft:"60px"}}>Chicken Bucket</Link>
       <Link to="/biryani" style={{color:"black",fontWeight:"bold",marginLeft:"60px"}}>Biryani Bucket</Link>
       <div>
        <Link to="/burgers">
            <div style={{display:"flex",gap:"10px",marginLeft:"100px",marginTop:"0px",cursor:"pointer"}} >
               
                <h4 style={{color:"black",fontWeight:"bold"}}>Burgers</h4>
            </div>
        </Link>
       
       </div>


       
 </div>

 <h1 style={{marginTop:"30px",fontWeight:"bold",fontSize:"30px"}}>Token: {authState.token}</h1>

 <FormControl style={{width:"600px",marginLeft:"400px",marginTop:"100px"}}>
  <FormLabel>Image Adress</FormLabel>
  <Input type='text' />
  
</FormControl>

<FormControl style={{width:"600px",marginLeft:"400px",marginTop:"10px"}}>
  <FormLabel>Title</FormLabel>
  <Input type='text'/>
</FormControl>

<FormControl style={{width:"600px",marginLeft:"400px",marginTop:"10px"}}>
  <FormLabel>Price</FormLabel>
  <Input type='text'/>
</FormControl>

<FormControl style={{width:"600px",marginLeft:"400px",marginTop:"10px"}}>
  <FormLabel>Description</FormLabel>
  <Input type='text'/>
</FormControl>

<FormControl style={{width:"600px",marginLeft:"400px",marginTop:"10px"}}>
  <FormLabel>Category</FormLabel>
  <Select placeholder='Select Category'>
    <option>Burgers</option>
    <option>Hot Deals</option>
    <option>Chicken Bucket</option>
    <option>Biryani</option>
  </Select>
</FormControl>
<br/>

<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500' style={{marginBottom:"50px"}}
>
  Add Product
</Button>

<br/>
<Link to="/adminlogin">
<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500' style={{marginBottom:"50px"}}
  onClick={logoutUser}
>
  Logout
</Button>
</Link>
        </div>
    )
}

export default AdminPage;