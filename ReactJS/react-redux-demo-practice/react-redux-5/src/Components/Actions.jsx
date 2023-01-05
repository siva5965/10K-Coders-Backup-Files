export const addUserAction = ()=>{
    return{
      type:"ADDUSER",
      payload:"Laptop",
    }
  
  }
  
  export const deleteUserAction = (user)=>{
    return {
      type:"DELETEUSER",
      payload:user
    }
  }