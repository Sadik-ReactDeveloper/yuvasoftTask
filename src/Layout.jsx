import { useState } from "react";
import './App.css';
let nextId = 1;
const Layout = () => {
const [name,setName] =useState("")
const [address,setAddress] =useState("")
const [editInd,setEditInd] =useState("")
const [list,setList] =useState([])

  const handleSubmit =(e)=>{
    e.preventDefault()
    
    if(editInd){
      list.splice(editInd,1,name)
    }
  
  setList([
      ...list,
      {id:nextId++,
        title: name,
        address:address
      }
    ])
  
   
   setName("")
    setAddress("")
  }

  const handleDelete =(id)=>{
    setList(list.filter((todo) => todo.id !== id));

  }
  
 

  function handleEdit(nextTodo,index) {
   const ab=  list.filter((ele)=>ele.id !==nextTodo.id)
   setName(nextTodo.title)
   setAddress(nextTodo.address)
   setList(ab)
   setEditInd(index)
  
  }
  return (
    <>
    <h2> User Can Add Name And Adress Here</h2>
    <form onSubmit={handleSubmit} >
      <div className="form">
      <input type="text" className="inputitem" placeholder="Enter Name" name="name"  required value={name} onChange={(e)=>setName(e.target.value)} />
    <input type="textarea" className="inputitem" placeholder="Enter Address" name="address"  required value={address} onChange={(e)=>setAddress(e.target.value)} />
    <button type="submit">Submit</button>
      </div>
     
     {list?.map((ele,index)=><ul key={index}>
     {ele?.title && <li>Name:{ele?.title } Id:{ele?.id}  Address:{ele?.address }<button onClick={(e)=>handleDelete(ele?.id)} style={{color:"red"}}>Delete</button> <button  style={{color:"green"}}onClick={(e)=>handleEdit(ele,index)}>Edit</button></li>
}      </ul>)}
    </form>
    
    
    </>
  )
};

export default Layout;


