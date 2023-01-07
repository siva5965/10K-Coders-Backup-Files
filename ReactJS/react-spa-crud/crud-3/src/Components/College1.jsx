import React from 'react'
import {useNavigate} from "react-router-dom"

const College1 = ({clg}) => {
  const navigate=useNavigate();
   const handleCollege=(clg)=>{
    navigate("/edit/"+clg.id)

   }
   const deleteCollege=(clg)=>{
    navigate("/delete/"+clg.id)



   }
  return (
   <tr>
    <td>{clg.id}</td>
    <td>{clg.university}</td>
    <td>{clg.institute}</td>
    <td>{clg.branch}</td>
    <td>{clg.degree}</td>
    <td>{clg.status}</td>
    <td>{clg.average}</td>
    <td>{clg.experience}</td>
    <td>{clg.website}</td>
    <td>
        <button type='button' className='btn btn-warning' onClick={()=>{handleCollege(clg)}}>Edit</button>
    </td>
    <td>
    <button type='button' className='btn btn-danger'onClick={()=>{deleteCollege(clg)}}>Delete</button>
    </td>
  
   </tr>
  )
}

export default College1