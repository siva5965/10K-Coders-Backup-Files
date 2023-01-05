export const addUserAction = ()=>{
    return{
      type:"ADDUSER",
      payload:"Watermelon",
    }
  
  }
  
  export const deleteUserAction = (user)=>{
    return {
      type:"DELETEUSER",
      payload:user
    }
  }