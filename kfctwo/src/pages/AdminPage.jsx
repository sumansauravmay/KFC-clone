import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {FormControl,FormLabel,Input,Button,Select} from "@chakra-ui/react";
import { AppContest } from "../Context/authContext/AuthContextProvider";
import logo from "../components/Images/Suman.png"

function AdminPage(){
const {authState,logoutUser}=React.useContext(AppContest)


const [img,setImg]=React.useState("")
const [title,setTitle]=React.useState("")
const [price,setPrice]=React.useState()
const [description,setDescription]=React.useState("")
const [category,setCategory]=React.useState("")


const getData=()=>{
  return axios({
      method:"POST",
      url:"https://wild-puce-dragonfly-belt.cyclic.app/menu",
      data:{img,title,price,description,category}
  })
}

const handleAddProduct=()=>{
  getData()
  .then((res)=>{
    console.log(res.data)
    alert("Product added successfully")
  })
}

    return (
        <div>
        <div style={{display:"flex",marginTop:"30px"}}>
       <div style={{display:'flex',marginLeft:"300px",gap:"30px"
       }}>
        <Link to="/">
            <img style={{width:"100px",height:"50px",marginTop:"0px"}}
            src={logo}
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
<Link to="/userdetails">
<h1 style={{fontWeight:"bold",fontSize:"25px"}}>User Details</h1>
</Link>
 

 <h1 style={{marginTop:"30px",fontWeight:"bold",fontSize:"30px"}}>Token: {authState.token}</h1>

 <FormControl style={{width:"600px",marginLeft:"400px",marginTop:"100px"}}>
  <FormLabel>Image Adress</FormLabel>
  <Input type='text' value={img} onChange={(e)=>setImg(e.target.value)}/>
  
</FormControl>

<FormControl style={{width:"600px",marginLeft:"400px",marginTop:"10px"}}>
  <FormLabel>Title</FormLabel>
  <Input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>
</FormControl>

<FormControl style={{width:"600px",marginLeft:"400px",marginTop:"10px"}}>
  <FormLabel>Price</FormLabel>
  <Input type='text'value={price} onChange={(e)=>setPrice(e.target.value)}/>
</FormControl>

<FormControl style={{width:"600px",marginLeft:"400px",marginTop:"10px"}}>
  <FormLabel>Description</FormLabel>
  <Input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
</FormControl>

<FormControl style={{width:"600px",marginLeft:"400px",marginTop:"10px"}}>
  <FormLabel>Category</FormLabel>
  <Select placeholder='Select Category' value={category} onChange={(e)=>setCategory(e.target.value)}>
    <option value="Burgers">Burgers</option>
    <option value="Hot Deals">Hot Deals</option>
    <option value="Chicken Bucket">Chicken Bucket</option>
    <option value="Biryani">Biryani</option>
  </Select>
</FormControl>
<br/>

<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500' style={{marginBottom:"50px"}}
  onClick={handleAddProduct}
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