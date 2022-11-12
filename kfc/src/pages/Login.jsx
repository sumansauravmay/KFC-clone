import React from "react";
import {Input,Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Login(){
    const navigate = useNavigate();

const [number,setNumber]=React.useState("")

    const getData={
       number : number
      }

const handleRegister=()=>{
    return axios({
        method:"POST",
        url:"http://localhost:4000/register",
        data:getData
    })
    .then((res)=>{
console.log("res",res)

alert("Sign up successfull")

    })
    .catch((err)=>{
        console.log("err",err)
    })
}

const handleHomePage=()=>{
    return navigate("/");
 }

    return (
        <>
            <p style={{fontWeight:"bold",marginTop:"20px"}}>Sign in / sign up</p>

        <img style={{marginLeft:"650px",marginTop:"40px"}}
        src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="kfc"/>

        <h1 style={{fontWeight:"bold",fontSize:"20px",width:"550px",marginLeft:"400px",marginTop:"30px"}}>
        LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</h1>

        

        <Input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}
        style={{width:"35%",marginTop:"100px"}}
        variant='flushed' placeholder='Enter Mobile Number'/>
 <br/>
{/* <Input type="text" value={name} onChange={(e)=>setName(e.target.value)}
        style={{width:"35%",marginTop:"40px"}}
        variant='flushed' placeholder='Enter Name'/> */}
{/* <br/>
<Input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}
        style={{width:"35%",marginTop:"40px"}}
        variant='flushed' placeholder='Enter Email' />  */}

        <p style={{fontSize:"14px",marginTop:"20px"}}>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</p>

    
    <button 
   style={{background:"black",color:"white",width:"200px",height:"40px",margin:"20px",borderRadius:"30px"}}
    onClick={handleRegister}>Send Me Code</button>
  
       

       <p style={{marginTop:"20px"}}>or</p>

<Button style={{background:"white",marginTop:"20px",color:"black",borderRadius:"20px",
border:"1px solid black",width:"500px"}} onClick={handleHomePage}>
Skip, Continue As Guest</Button>




        </>
    )
}
export default Login