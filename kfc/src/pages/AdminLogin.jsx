import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { AppContest } from "../Context/authContext/AuthContextProvider";
import {FormControl,FormLabel,Input,FormHelperText,Button} from "@chakra-ui/react"


function AdminLogin() {

const [email,setEmail]=React.useState("");
const [password,setPassword]=React.useState("");
const [loading,setLoading]=React.useState(false);
const {loginUser,authState}=React.useContext(AppContest)

const navigate = useNavigate();

const loginStatus=(e)=>{
e.preventDefault();
setLoading(true)
fetch(`https://reqres.in/api/login`,{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({email,password})
})
.then((res)=>res.json())
.then((res)=>{
  console.log(res.token)
  if(res.token)
  {
    loginUser(res.token)
   navigate("/adminpage")

  }
 
})
.catch((err)=>{
  console.log(err)
})
}




  return (
    <div className="login-page">
<h1 style={{fontWeight:"bold",fontSize:"30px"}}>Admin Login</h1>

<img style={{marginLeft:"650px",marginTop:"40px"}}
        src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="kfc"/>
   
        <h1 style={{fontWeight:"bold",fontSize:"20px",width:"550px",marginLeft:"400px",marginTop:"30px"}}>
        LET'S SIGN With YOUR Email!</h1>


<FormControl style={{width:"600px",marginLeft:"400px",marginTop:"100px"}}>
  <FormLabel>Email address</FormLabel>
  <Input type='email'  value={email}
            onChange={(e)=>setEmail(e.target.value)} />
  
</FormControl>

<FormControl style={{width:"600px",marginLeft:"400px",marginTop:"10px"}}>
  <FormLabel>Password</FormLabel>
  <Input type='password' value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
 
</FormControl>
<br/>

<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500' onClick={loginStatus}
>
  Login
</Button>

      {/* <form className="form" data-testid="login-form" onSubmit={loginStatus}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" 
           value={email}
            onChange={(e)=>setEmail(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form> */}
      <div>
      <br/>
      <Link className="message" to="/">
      <Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500' 
>
  Go Back
</Button>
</Link>
        
      </div>
    </div>
  );
}
export default AdminLogin;