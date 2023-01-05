export const addUserAction = ()=>{
    return{
      type:"ADDUSER",
      payload:"Peacock",
    }
  
  }
  
  export const deleteUserAction = (user)=>{
    return {
      type:"DELETEUSER",
      payload:user
    }
  }