import React, { Component } from 'react'

export default class Form2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            address: {
                street: "",
                city: "",
                state: "",
                pincode: "",
                country: ""
            },
            allUsers: [],
            editIndex: null
        };
    }
    handleChange = (e) => {
        var newaddress = { ...this.state.address }
        newaddress[e.target.name] = e.target.value
        this.setState({ address: newaddress })
    };
    addUser = () => {
        console.log(this.state.address);
        var newallUsers = [...this.state.allUsers]
        newallUsers.push(this.state.address)
        this.setState({ allUsers: newallUsers })
        this.clearForm()
    };
    clearForm = () => {
        var newForm = {
            street: "",
            city: "",
            state: "",
            pincode: "",
            country: ""
        }
        this.setState({address:newForm})
    }

    editUser=(usr,i)=>{
        // console.log(usr);
        this.setState({address:usr,editIndex:i})
    }
    deleteUser=(usr)=>{
        console.log(usr);
        var latestUsers = this.state.allUsers.filter((myUser)=> myUser.pincode !== usr.pincode)
        this.setState({allUsers:latestUsers})

    }
    updateUser =()=>{
        var latestUsers = [...this.state.allUsers]
        latestUsers[this.state.editIndex]=this.state.address
        this.setState({allUsers:latestUsers,editIndex:null})
        this.clearForm()
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">Street : </label>
                    <input type="text" name="street" value={this.state.address.street} onChange={(e) => { this.handleChange(e) }} /> <br />
                    
                    <label htmlFor="">City : </label>
                    <input type="text" name="city" value={this.state.address.city} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">State : </label>
                    <input type="text" name="state" value={this.state.address.state} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Pin code : </label>
                    <input type="text" name="pincode" value={this.state.address.pincode} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Country : </label>
                    <input type="text" name="country" value={this.state.address.country} onChange={(e) => { this.handleChange(e) }} /> <br />
                    {this.state.editIndex !== null ? <button type="button" onClick={this.updateUser} className="btn btn-primary">Update User</button> : 
                    <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>}
                    {/* <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button> */}
                </form>
                <hr />
                <table className="table table-striped">
                    <thead>
                        <tr>

                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Pin Code</th>
                            <th>Country</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((usr,i) => <tr key={i}>
                            <td>{usr.street}</td>
                            <td>{usr.city}</td>
                            <td>{usr.state}</td>
                            <td>{usr.pincode}</td>
                            <td>{usr.country}</td>
                            <td>
                                <button className="btn btn-warning" onClick={()=>{this.editUser(usr,i)}}>EDIT</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={()=> {this.deleteUser(usr)}}>DELETE</button>
                            </td>
                        </tr>

                        )}
                    </tbody>
                </table>

            </div>
        )
    }
}
