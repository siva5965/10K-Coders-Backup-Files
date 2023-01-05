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