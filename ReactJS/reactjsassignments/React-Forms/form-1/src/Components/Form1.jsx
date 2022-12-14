import React, { Component } from 'react'

export default class Form1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: {
                fname: "",
                lname: "",
                dob: "",
                email: "",
                phone: ""
            },
            allUsers: [ ],
            editIndex: null
        };
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
            fname: "",
            lname: "",
            dob: "",
            email: "",
            phone: ""
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
                <h2>HTML Form</h2>
                <form>
                    <label htmlFor="">First Name : </label>
                    <input type="text" name="fname" value={this.state.details.fname} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Last Name : </label>
                    <input type="text" name="lname" value={this.state.details.lname} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Date of Birth : </label>
                    <input type="text" name="dob" value={this.state.details.dob} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Email : </label>
                    <input type="text" name="email" value={this.state.details.email} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Mobile Number : </label>
                    <input type="text" name="phone" value={this.state.details.phone} onChange={(e) => { this.handleChange(e) }} /> <br />
                    {this.state.editIndex !== null ? <button type="button" onClick={this.updateUser} className="btn btn-primary">Update User</button> : <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>}

                </form>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((usr,i) => <tr key={i}>
                            <td>{usr.fname}</td>
                            <td>{usr.lname}</td>
                            <td>{usr.dob}</td>
                            <td>{usr.email}</td>
                            <td>{usr.phone}</td>
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
