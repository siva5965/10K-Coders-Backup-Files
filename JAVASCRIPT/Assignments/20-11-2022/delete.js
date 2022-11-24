function deleteUser(i) {
        console.log("DELETE Called",i);
        users = users.filter((usr,index)=> i !== index)
        localStorage.setItem("Users",users)
        displayUsers(users)
}