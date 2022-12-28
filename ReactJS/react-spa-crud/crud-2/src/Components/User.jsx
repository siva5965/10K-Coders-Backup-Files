import React from 'react'
import { useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const navigate= useNavigate()
    
    const handleDelete=(user)=>{
        console.log(user);
        navigate('/delete/'+user.id)

    }
    const handleEdit = (user)=>{
        navigate('/edit/'+user.id)
    }
  return (
    <tr>
        <td>{user.id}</td>
        <td>{user.fname}</td>
        <td>{user.lname}</td>
        <td>{user.dob}</td>
        <td>{user.email}</td>
        <td>{user.mobile}</td>
        <td>
            <button className='btn btn-warning' onClick={()=>{handleEdit(user)}}>EDIT</button>
        </td>
        <td>
            <button className='btn btn-danger'onClick={()=>{handleDelete(user)}}>DELETE</button>
        </td>
    </tr>
  )
}

export default User
