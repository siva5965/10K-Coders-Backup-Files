const { Component } = require("react");

class User extends Component{
    constructor(){
        super()
        this.state = {
            fname:"",
            lname:"",
            email:""
        }
        
    }
    handleChange(e){
        // console.log(e.target.name)
        var newObject = {...this.state}
        newObject[e.target.name]= e.target.value
        this.setState(newObject)
    }
    addUser=() => {
        console.log(this.state);
    }
    editUser=()=>{
        var  newUser={
            fname:"siva",
            lname:"kalyan",
            email:"siva@gmail.com"
        }
        this.setState(newUser)
    }
    render(){
        return <div>
            <form>
                <label htmlFor="">First Name : </label>
                <input type="text" name="fname" value={this.state.fname} onChange={(e)=>{this.handleChange(e)} }/> <br />
                <label htmlFor="">Last Name : </label>
                <input type="text" name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}} /> <br />
                <label htmlFor="">Email : </label>
                <input type="email" name="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}}/> <br />
                <button type="button" onClick={this.addUser}>Add User</button>
                <button type="button" onClick={this.editUser}>Edit User</button>
            </form>
        </div>
    }
}

export  default User