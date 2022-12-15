import React, { Component } from 'react'

export default class Form4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            details: {
                university: "",
                institute: "",
                branch: "",
                degree: "",
                status: "",
                cgpa: "",
                experience: "",
                blog: ""


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
            university: "",
            institute: "",
            branch: "",
            degree: "",
            status: "",
            cgpa: "",
            experience: "",
            blog: ""
        }
        this.setState({ details: newForm })
    }
    editUser = (usr, i) => {
        this.setState({ details: usr, editIndex: i })
    }
    deleteUser = (usr) => {
        console.log(usr);
        var latestUsers = this.state.allUsers.filter((myUser) => myUser.university !== usr.university)
        this.setState({ allUsers: latestUsers })
    }
    updateUser = () => {
        var latestUsers = [...this.state.allUsers]
        latestUsers[this.state.editIndex] = this.state.details
        this.setState({ allUsers: latestUsers, editIndex: null })
        this.clearForm()
    }

    render() {
        const {
            university,
            institute,
            branch,
            degree,
            status,
            cgpa,
            experience,
            blog
        } =this.state.details
        return (
            <div className="mydata left">
                <form>
                    <fieldset>
                        <legend>Registration Details</legend>

                        <label >University : </label>
                        <input type="text" name="university" value={university} onChange={(e) => { this.handleChange(e) }} /><br />

                        <label >Institute : </label>
                        <input type="text" name="institute" value={institute} onChange={(e) => { this.handleChange(e) }} /><br />

                        <label >Branch : </label>
                        <select name="branch" value={branch} onChange={(e) => { this.handleChange(e) }}>
                            <option>select branch</option>
                            <option value={"ECE"}>ECE</option>
                            <option value={"CSE"}>CSE</option>
                            <option value={"EEE"}>EEE</option>
                            <option value={"CIVIL"}>CIVIL</option>
                            <option value={"MECH"}>MECH</option>
                        </select><br />

                        <label >Degree : </label>

                        <select name="degree" value={degree} onChange={(e) => { this.handleChange(e) }}>
                            <option>select degree</option>
                            <option value={"B.TECH"}>B.TECH</option>
                            <option value={"M.TECH"}>M.TECH</option>
                            <option value={"MBA"}>MBA</option>
                            <option value={"B.COM"}>B.COM</option>
                            <option value={"B.SC"}>B.SC</option>
                        </select>
                        <br />
                        <label >Status</label>
                        <input type="radio" name="status" value={"pursuing"} onChange={(e) => { this.handleChange(e) }} checked={status === "pursuing"}/>Pursuing
                        <input type="radio" name="status" value={"completed"} onChange={(e) => { this.handleChange(e) }} checked={status === "completed"}/>Completed <br />




                        <label >CGPA : </label>
                        <input type="number" style={{ width: 40 }} name="cgpa" value={cgpa} onChange={(e) => { this.handleChange(e) }} /> <br />

                        <label >Experience : </label>
                        <input type="number" style={{ width: 40 }} name="experience" value={experience} onChange={(e) => { this.handleChange(e) }} />Years <br />

                        <label >Blog : </label>
                        <input type="text" name="blog" value={blog} onChange={(e) => { this.handleChange(e) }} /> <br />


                        {this.state.editIndex !== null ? <button type="button" onClick={this.updateUser} className="btn btn-primary">Update User</button> :
                            <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>}

                    </fieldset>
                </form>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>University</th>
                            <th>Institute</th>
                            <th>Branch</th>
                            <th>Degree</th>
                            <th>Status</th>
                            <th>CGPA</th>
                            <th>Experience</th>
                            <th>Blog</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((usr, i) => <tr key={i}>
                            <td>{usr.university}</td>
                            <td>{usr.institute}</td>
                            <td>{usr.branch}</td>
                            <td>{usr.degree}</td>
                            <td>{usr.status}</td>
                            <td>{usr.cgpa}</td>
                            <td>{usr.experience}</td>
                            <td>{usr.blog}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => { this.editUser(usr, i) }}>EDIT</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => { this.deleteUser(usr) }}>DELETE</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
