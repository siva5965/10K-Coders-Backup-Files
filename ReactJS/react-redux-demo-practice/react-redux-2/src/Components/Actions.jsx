export const addUserAction = ()=>{
    return{
      type:"ADDUSER",
      payload:"Lion",
    }
  
  }
  
  export const deleteUserAction = (user)=>{
    return {
      type:"DELETEUSER",
      payload:user
    }
  }