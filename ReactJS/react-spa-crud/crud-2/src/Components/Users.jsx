import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import User from './User'

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        const response = await (await fetch("http://localhost:3201/users")).json();
        setUsers(response)

    };
    return (
        <div>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Email Id</th>
                        <th>Mobile Number</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((myUser,i)=> <User user={myUser} key={i}/>)}


                </tbody>
            </table>
        </div>
    )
}

export default Users
