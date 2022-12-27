import React from 'react'

const User = ({usr}) => {
    const handleDelete=(usr)=>{
        console.log(usr);
    }
  return (
    <tr>
        <td>{usr.id}</td>
        <td>{usr.fname}</td>
        <td>{usr.lname}</td>
        <td>{usr.dob}</td>
        <td>{usr.email}</td>
        <td>{usr.mobile}</td>
        <td>
            <button className='btn btn-warning'>EDIT</button>
        </td>
        <td>
            <button className='btn btn-danger'onClick={()=>{handleDelete(usr)}}>DELETE</button>
        </td>
    </tr>
  )
}

export default User
