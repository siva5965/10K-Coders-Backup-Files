import React, { Component } from 'react'

export default class Form5 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: {
                username: "",
                password: "",
                email: "",
                gender: "",
                prefer: "",
                dob: "",
                height: "",
                weight: ""
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
        var newAllUsers = [...this.state.allUsers]
        newAllUsers.push(this.state.details)
        this.setState({ allUsers: newAllUsers })
        this.clearForm()
    };
    clearForm = () => {
        var newForm = {
            username: "",
            password: "",
            email: "",
            gender: "",
            prefer: "",
            dob: "",
            height: "",
            weight: ""
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
        const{
            username,
            password,
            email,
            gender,
            prefer,
            dob,
            height,
            weight     
        } = this.state.details
        return (
            <div>
                <form>
                    <label htmlFor="">User Name : </label>
                    <input type="text" name="username" value={username} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Password : </label>
                    <input type="password" name="password" value={password} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Email Address : </label>
                    <input type="email" name="email" value={email} onChange={(e) => { this.handleChange(e) }} /> <br />
                    
                    <label htmlFor="">Gender : </label>
                    <select name="gender" value={gender} onChange={(e) => { this.handleChange(e) }}>
                        <option>select gender</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                    </select> <br />
                    {/* <input type="text" name="gender" value={gender} onChange={(e) => { this.handleChange(e) }} /> <br /> */}


                    <label htmlFor="">Prefer : </label>
                    <select name="prefer" value={prefer} onChange={(e) => { this.handleChange(e) }}>
                        <option>select preference</option>
                        <option value={"i want female"}>I want Female</option>
                        <option value={"i want male"}>I want Male</option>
                    </select> <br />
                    {/* <input type="text" name="prefer" value={prefer} onChange={(e) => { this.handleChange(e) }} /> <br /> */}


                    <label htmlFor="">Date of Birth : </label>
                    <input type="date" name="dob" value={dob} onChange={(e) => { this.handleChange(e) }} required/> <br />
                    <label htmlFor="">Height : </label>
                    <input type="tel" name="height" value={height} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Weight : </label>
                    <input type="tel" name="weight" value={weight} onChange={(e) => { this.handleChange(e) }} /> <br />
                    {this.state.editIndex !== null ? <button type="button" onClick={this.updateUser} className="btn btn-primary">Update User</button> : <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>}

                </form>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Email Address</th>
                            <th>Gender</th>
                            <th>Prefer</th>
                            <th>Date of Birth</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((usr,i) => <tr key={i}>
                            <td>{usr.username}</td>
                            <td>{usr.password}</td>
                            <td>{usr.email}</td>
                            <td>{usr.gender}</td>
                            <td>{usr.prefer}</td>
                            <td>{usr.dob}</td>
                            <td>{usr.height}</td>
                            <td>{usr.weight}</td>
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
