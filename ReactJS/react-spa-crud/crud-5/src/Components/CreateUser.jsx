import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import UserForm from './UserForm';

const CreateUser = () => {
    const navigate = useNavigate();
    const [Users, setUsers] = useState({
        id: "",
        username: "",
        password: "",
        email: "",
        status: "",
        find: "",
        dob: "",
        height: "",
        weight: ""

    })

    const handleChange = (e) => {
        let newUsers = { ...Users }
        newUsers[e.target.name] = e.target.value
        setUsers(newUsers)

    }

    const addUsers = () => {
        fetch("http://localhost:3201/UserDetails", {
            method: "POST",
            body: JSON.stringify(Users),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            navigate("/")
        })
    }

    const clearForm = () => {
        setUsers({
            id: "",
            username: "",
            password: "",
            email: "",
            status: "",
            find: "",
            dob: "",
            height: "",
            weight: ""
        })
    }


    return (
        <div className='container'>
            <UserForm handleChange={handleChange} Users={Users} handleUsers={addUsers} btnText="CreateUser" />

        </div>
    )
}

export default CreateUser
