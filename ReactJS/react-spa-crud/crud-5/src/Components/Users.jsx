import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import User1 from './User1'


const Users = () => {
    const [Users,setUsers]= useState([])
    useEffect(()=>{
        getallUsers();
    },[])
    const getallUsers = async () =>{
        let data = await (await fetch("http://localhost:3201/UserDetails")).json();
        setUsers(data)
    }
  return (
    <div>
        <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username:</th>
            <th>Password:</th>
            <th>Email</th>
            <th>Status</th>
            <th>Find</th>
            <th>Date of Birth</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
         {Users.map((usr,i)=> <User1 usr={usr} key={i} />)}
        </tbody>
      </table>
      
    </div>
  )
}

export default Users
