import { ADD_PERSON, DELETE_PERSON } from "./ActionTypes"

export const addUserAction = ()=>{
    return{
      type:"ADDUSER",
      payload:"Shiva",
    }
  
  }
  
  export const deleteUserAction = (user)=>{
    return {
      type:"DELETEUSER",
      payload:user
    }
  }

  export const addPersonAction= (person)=>{
    return {
      type:ADD_PERSON,
      payload:person
    }
  }

  export const delePersonAction = (person)=>{
    return{
      type:DELETE_PERSON,
      payload:person
    }
  }