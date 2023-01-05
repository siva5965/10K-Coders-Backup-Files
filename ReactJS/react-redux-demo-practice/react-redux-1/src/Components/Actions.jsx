export const addUserAction = () =>{
  return {
    type:"ADDUSER",
    payload:"Bus",
  }
}

export const deleteUserAction = (user) => {
  return {
    type:"DELETEUSER",
    payload:user
  }
}