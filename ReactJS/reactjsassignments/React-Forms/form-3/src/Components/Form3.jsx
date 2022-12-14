import React, { Component } from 'react'

export default class Form3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: {
                name: "",
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
                message: ""

            },
            allUsers: [],
            editIndex: null
        }
    }
    handleChange = (e) => {
        var newDetails = { ...this.state.details }
        newDetails[e.target.name] = e.target.value
        this.setState({ details: newDetails })
    };
    addUser = () => {
        console.log(this.state.details);
        var newAllUsers = [...this.state.allUsers]
        newAllUsers.push(this.state.details)
        this.setState({ allUsers: newAllUsers })
        this.clearForm()
    };
    clearForm = () => {
        var newForm = {
            name: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            message: ""
        }
        this.setState({ details: newForm })
    }
    editUser = (usr, i) => {
        this.setState({ details: usr, editIndex:i})
    }
    deleteUser = (usr) => {
        console.log(usr);
        var latestUsers = this.state.allUsers.filter((myUser)=> myUser.email !== usr.email)
        this.setState({allUsers:latestUsers})
    }
    updateUser = () => {
        var latestUsers = [...this.state.allUsers]
        latestUsers[this.state.editIndex] = this.state.details
        this.setState({ allUsers: latestUsers, editIndex: null })
        this.clearForm()
    }

    render() {
        return (
            <div>
                 <h2>Bootstrap 4 Form Validation Demo</h2>
                <form>
                    <label htmlFor="">Name : </label>
                    <input type="text" name="name" value={this.state.details.name} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">User Name : </label>
                    <input type="text" name="username" value={this.state.details.username} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Email : </label>
                    <input type="email" name="email" value={this.state.details.email} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Password : </label>
                    <input type="password" name="password" value={this.state.details.password} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Confirm Password : </label>
                    <input type="password" name="confirmpassword" value={this.state.details.confirmpassword} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Message : </label>
                    <input type="text" name="message" value={this.state.details.message} onChange={(e) => { this.handleChange(e) }} /> <br />
                    {this.state.editIndex !== null ? <button type="button" onClick={this.updateUser} className="btn btn-primary">Update User</button> : <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>}

                </form>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Confirm Password</th>
                            <th>Message</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((usr,i) => <tr key={i}>
                            <td>{usr.name}</td>
                            <td>{usr.username}</td>
                            <td>{usr.email}</td>
                            <td>{usr.password}</td>
                            <td>{usr.confirmpassword}</td>
                            <td>{usr.message}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => { this.editUser(usr, i) }}>EDIT</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { this.deleteUser(usr)}}>DELETE</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
