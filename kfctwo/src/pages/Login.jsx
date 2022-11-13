import React from "react";
import {Input,Button,PinInput,PinInputField} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import logo from "../components/Images/Suman.png"





function Login(){
    const navigate = useNavigate();

const [phoneNumber,setPhoneNumber]=React.useState("")
const [name,setName]=React.useState("")
const [email,setEmail]=React.useState("")
const [otp,setOtp]=React.useState()


const [loading,setLoading]=React.useState(false)


const getData=()=>{
    return axios({
        method:"POST",
        url:"http://localhost:5000/register",
        data:{phoneNumber,name,email}
    })
}



const handleOtp=(e)=>{
setOtp(e.target.value)
}

const handleOtpFunc=()=>{
    console.log(otp)
    setOtp(8251)
    // if(otp===8251)
    // {
        return navigate("/")
    // }
//    alert("wrong")
}

const handleRegister=()=>{
    setLoading(true)
   
getData()
    .then((res)=>{
console.log("res",res)
setLoading(false)
alert(`Your OTP is 8251`)

    })
    .catch((err)=>{
        console.log("err",err)
    })
}

const handleHomePage=()=>{
    return navigate("/");
 }

 if(loading)
 {
  return <img 
  style={{marginLeft:"400px",widht:"200px",height:"500px"}} 
  src="https://online.kfc.co.in/KFC_Loader_Gif.gif" alt="loading"/>
 }


    return (
        <>
            <p style={{fontWeight:"bold",marginTop:"20px"}}>Sign in / sign up</p>

        <img style={{marginLeft:"550px",marginTop:"40px",height:"200px"}}
         src={logo} alt="kfc"/>
   
        <h1 style={{fontWeight:"bold",fontSize:"20px",width:"550px",marginLeft:"400px",marginTop:"30px"}}>
        LET'S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</h1>

        

        <Input type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}
        style={{width:"35%",marginTop:"100px"}}
        variant='flushed' placeholder='Enter Mobile Number'/>
 <br/>
<Input type="text" value={name} onChange={(e)=>setName(e.target.value)}
        style={{width:"35%",marginTop:"40px"}}
        variant='flushed' placeholder='Enter Name'/> 
<br/>
<Input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}
        style={{width:"35%",marginTop:"40px"}}
        variant='flushed' placeholder='Enter Email' /> 

 <p style={{fontSize:"14px",marginTop:"20px"}}>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</p>

    
    <button 
   style={{background:"black",color:"white",width:"200px",height:"40px",margin:"20px",borderRadius:"30px"}}
    onClick={handleRegister}>Send Me Code</button>
  
      <br/>
      <br/>
      <PinInput>
  <PinInputField style={{marginLeft:"10px"}}  onChange={handleOtp}/>
  <PinInputField style={{marginLeft:"10px"}}  onChange={handleOtp}/>
  <PinInputField style={{marginLeft:"10px"}} onChange={handleOtp}/>
  <PinInputField style={{marginLeft:"10px"}} onChange={handleOtp}/>
</PinInput>
<br/>
<br/>

<button 
   style={{background:"black",color:"white",width:"200px",height:"40px",margin:"20px",borderRadius:"30px"}}
    onClick={handleOtpFunc}>Enter OTP</button>
  

       <p style={{marginTop:"20px"}}>or</p>

<Button style={{background:"white",marginTop:"20px",color:"black",borderRadius:"20px",
border:"1px solid black",width:"500px"}} onClick={handleHomePage}>
Skip, Continue As Guest</Button>




        </>
    )
}
export default Login;