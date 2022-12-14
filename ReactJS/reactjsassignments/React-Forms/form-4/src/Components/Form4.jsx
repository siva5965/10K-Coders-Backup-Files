import React, { Component } from 'react'

export default class Form4 extends Component {
    render() {
        return (
            <div className="mydata left">
                <form>
                    <fieldset>
                        <legend>Registration Details</legend>

                        <label for="university">University : </label>
                        <input type="text" id="university" /><br />

                        <label for="institute">Institute : </label>
                        <input type="text" id="institute" /><br />

                        <label for="branch">Branch : </label>
                        <select name="Branch" id="branch">
                            <option>select</option>
                            <option value="ECE">ECE</option>
                            <option value="CSE">CSE</option>
                            <option value="EEE">EEE</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="MECH">MECH</option>
                        </select><br />

                        <label for="degree">Degree : </label>

                        <select name="Degree" id="degree">
                            <option>select</option>
                            <option value="B.TECH">B.TECH</option>
                            <option value="M.TECH">M.TECH</option>
                            <option value="MBA">MBA</option>
                            <option value="B.COM">B.COM</option>
                            <option value="B.SC">B.SC</option>
                        </select>
                        <br />
                        <label for="status">Status</label>
                        <input type="radio" name="status" value="Pursuing" />Pursuing
                        <input type="radio" name="status" value="Completed" />Completed <br />




                        <label for="cgpa">CGPA : </label>
                        <input type="number" style={{ width: 40 }} id="cgpa" />Upto
                        <input type="number" style={{ width: 40 }} id="cgpa" />Th Semester <br />

                        <label for="experience">Experience : </label>
                        <input type="number" style={{ width: 40 }} id="experience" />Years <br />

                        <label for="blog">Blog : </label>
                        <input type="text" id="blog" value="http://" /> <br />

                        <label for="doj">Date of Joining : </label>
                        <input type="date" name="" id="doj" /> <br />

                        <label for="skill">Skills : </label>
                        <input type="checkbox" name="skill" value="HTML" />HTML <br />
                        <input type="checkbox" name="skill" value="CSS" />CSS <br />
                        <input type="checkbox" name="skill" value="Javascript" />Javascript <br />
                        <input type="checkbox" name="skill" value="ReactJS" />ReactJS <br />


                        {this.state.editIndex !== null ? <button type="button" onClick={this.updateUser} className="btn btn-primary">Update User</button> :
                        <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>}

                    </fieldset>
                </form>
            </div>
        )
    }
}
