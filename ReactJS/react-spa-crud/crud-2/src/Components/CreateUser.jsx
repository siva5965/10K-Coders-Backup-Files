import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [user,setUser] = useState(
    {
      id: "",
      fname: "",
      lname: "",
      dob: "",
      email: "",
      mobile: ""
      
    },
    []
  );

  const navigate=useNavigate();

  const handleChange= (e)=>{
    let newUser = {...user};
    newUser[e.target.name]= e.target.value;
    setUser(newUser)

  }
  const addUser =()=>{
    console.log(user);
    fetch("http://localhost:3201/users",{
      method:"POST",
      body:JSON.stringify(user),
      headers:{'Content-Type':"application.json"}
    }).then(()=>{
      console.log("User Added");
      clearForm()
      navigate('/')
    })
  }
  const clearForm=()=>{
    setUser({
      id: "",
      fname: "",
      lname: "",
      dob: "",
      email: "",
      mobile: ""
      
    })
  }
  return (
    <div className='container'>
      <form>
      <div className="mb-3">
    <label htmlFor="id" className="form-label">ID</label>
    <input type="text" className="form-control" value={user.id} name="id" onChange={(e)=>{handleChange(e)}}/>
    
  </div>
      <div className="mb-3">
    <label htmlFor="fname" className="form-label">First Name</label>
    <input type="text" className="form-control" value={user.fname} name="fname" onChange={(e)=>{handleChange(e)}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="lname" className="form-label">Last Name</label>
    <input type="text" className="form-control" value={user.lname} name="lname" onChange={(e)=>{handleChange(e)}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="dob" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" value={user.dob} name="dob" onChange={(e)=>{handleChange(e)}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" value={user.email} name="email" onChange={(e)=>{handleChange(e)}}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="mobile" className="form-label">Mobile Number</label>
    <input type="tel" className="form-control" value={user.mobile} name="mobile" onChange={(e)=>{handleChange(e)}}/>
  </div>
  
  <button type="button" className="btn btn-primary" onClick={addUser}>Submit</button>
</form>
      
    </div>
  )
}

export default CreateUser
