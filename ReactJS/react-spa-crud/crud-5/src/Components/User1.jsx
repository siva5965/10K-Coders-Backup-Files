import React from 'react'
import {useNavigate} from "react-router-dom"

const User1 = ({usr}) => {
    const navigate=useNavigate();
    const handleUsers = (usr)=>{
        navigate("/edit/"+usr.id)
    }

    const deleteUsers = (usr)=>{
        navigate ("/delete/"+usr.id)
    }

  return (
    <tr>
    <td>{usr.id}</td>
    <td>{usr.username}</td>
    <td>{usr.password}</td>
    <td>{usr.email}</td>
    <td>{usr.status}</td>
    <td>{usr.find}</td>
    <td>{usr.dob}</td>
    <td>{usr.height}</td>
    <td>{usr.weight}</td>
    <td>
        <button type='button' className='btn btn-warning' onClick={()=>{handleUsers(usr)}}>Edit</button>
    </td>
    <td>
    <button type='button' className='btn btn-danger'onClick={()=>{deleteUsers(usr)}}>Delete</button>
    </td>
  
   </tr>
  )
}

export default User1
