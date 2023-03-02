import React from "react";
import {Link} from "react-router-dom";
import logo from "../components/Images/Suman.png";
import {Button} from "@chakra-ui/react";
import { AppContest } from "../Context/authContext/AuthContextProvider";
import axios from "axios";

function UserDetails(){
const [data,setData]=React.useState([])
    const {logoutUser}=React.useContext(AppContest)


const getData=()=>{
return axios.get(`https://wild-puce-dragonfly-belt.cyclic.app/register`)
}

React.useEffect(()=>{
    getData()
    .then((res)=>{
setData(res.data)
    })
})



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

{/* "phoneNumber": "9876456677",
      "name": "suman saurav",
      "email": "sumansauravmay12345@gmail.com",
      "id": 1 */}



                {/* <thead>
                    <tr>
                        <th>Phone Number</th>
                        <th>Name</th>
                        <th>Email</th>
                        
                    </tr>
                </thead> */}
                <div>
                
                    {data.map((item) => (
                        <div key={item.id}>
                        <h3 style={{fontWeight:"bold",fontSize:"20px"}}>Name : {item.name}</h3>
                        <h3>Phone Number : {item.phoneNumber}</h3>
                       
                        <h3>Email : {item.email}</h3>
                        </div>
                        
                    ))}
                </div>
                
        </div>
    )
}
export default UserDetails;