import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams, useNavigate} from "react-router-dom"

const DeleteUser = () => {
  const params=useParams();
  const navigate=useNavigate();
  const[Users,setUsers]=useState({})
  useEffect(()=>{
    fetch("http://localhost:3201/UserDetails/"+params.id).then((response)=> response.json()).then((data)=>{
      setUsers(data)

    })
  },[])
  const ConfirmDelete=()=>{
    fetch("http://localhost:3201/UserDetails/"+params.id,{
      method:"DELETE"

    }).then(()=>{
      navigate("/")
    })
  }
  return (
    <div>
  <ul>
   <li>{Users.id}</li>
   <li>{Users.username}</li>
   <li>{Users.password}</li>
   <li>{Users.email}</li>
   <li>{Users.status}</li>
   <li>{Users.find}</li>
   <li>{Users.dob}</li>
   <li>{Users.height}</li>
   <li>{Users.weight}</li>
   </ul>
  <button type='button' onClick={ConfirmDelete} className="btn btn-danger">ConfirmDelete</button>

    </div>
  )
}

export default DeleteUser