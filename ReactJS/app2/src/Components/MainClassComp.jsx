import { Component } from "react";

export class MainClassComp extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "Siva Kalyan",
            person: {
                fname: "krishna",
                lname: "sai",
                email: "krishnasai0123@gmail.com",
                city: "Bangalore",
                state: "Karnataka"
            },
            users: ["Dinesh", "Ganesh", "Bhanu", "Prasanth", "Rohit", "Krishna"]
        }
    }

    render() {
        return <div>
            <h2>Welcome to {this.state.fullName}</h2>
            <hr />
            
            <ul>
                {/* <li>{this.state.users[0]}</li>
                <li>{this.state.users[1]}</li>
                <li>{this.state.users[2]}</li> */}
                {this.state.users.map((value) => {
                    return <li>{value}</li>
                })}
            </ul>
            <hr />
            <ul>
                {Object.values(this.state.person).map((val) => {
                    return <li>{val}</li>
                })}
                {/* <li>{this.state.person.fname}</li>
                <li>{this.state.person.lname}</li>
                <li>{this.state.person.email}</li> */}
            </ul>
        </div>
    }
}