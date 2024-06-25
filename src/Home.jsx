import React, { useEffect, useState } from 'react';
import { useNavigate ,useLocation} from 'react-router-dom';
const Home = () => {
  const location=useLocation()
  const [name,setName] =useState("")
useEffect(()=>{
  console.log(location.state)
},[])
  const handleSubmit=()=>{
    console.log(location.state)
    console.log("object",name)
  }
    return <div>
      <input type="text"  name="name" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>;
  };
  
  export default Home;

  
// let num=5;
// let str="";
// // for row
// for(let i=1; i<num; i++){
//     // for increament
//     for(let j=1; j<=i; j++){
//         str +=j
//     }
//     for(let k=i-1; k>=1; k--){
//         str +=k
//     }
//     str +="\n"
// }
// console.log(str)