import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams,useNavigate} from "react-router-dom"
import UserForm from './UserForm';

const EditUser = () => {
  const params=useParams();
  const navigate=useNavigate();
  const [Users,setUsers]=useState({
    id: 1,
    username: "",
    password: "",
    email: "",
    status: "",
    find: "",
    dob: "",
    height: "",
    weight: ""
    
  })
  const handleChange=(e)=>{
    let newUsers={...Users}
    newUsers[e.target.name]=e.target.value
    setUsers(newUsers)

  }
  useEffect(()=>{
    fetch("http://localhost:3201/UserDetails/"+params.id).then((response)=>response.json()).then((data)=>{
      setUsers(data)
    })
  },[])
   const updateUsers=()=>{
    fetch("http://localhost:3201/UserDetails/"+params.id,{
      method:"PUT",
      body:JSON.stringify(Users),
      headers:{
        "Content-Type":"application/json"
      }

    }).then(()=>{
      navigate("/")
    })
   }

  return (
    <div>
    <UserForm handleChange={handleChange} Users={Users} btnText="updateUsers" handleUsers={updateUsers}/>

    </div>
  )
}

export default EditUser