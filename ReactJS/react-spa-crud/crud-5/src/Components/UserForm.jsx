import React from 'react'

const UserForm = ({handleChange,Users,handleUsers,btnText}) => {
    return (
        <div>
            <form>
                <label htmlFor="">Id</label>
                <input type="number" name="id" disabled value={Users.id} onChange={(e) => { handleChange(e); }} /><br />
                <label htmlFor="username">Username</label><br />
                <input type="text" name="username" value={Users.username} onChange={(e) => { handleChange(e); }} /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" value={Users.password} onChange={(e) => { handleChange(e); }} /><br />
                <label htmlFor="email">Email Address</label><br />
                <input type="email" name="email" value={Users.email} onChange={(e) => { handleChange(e); }} /><br />
                <label htmlFor="status"></label>
                <select name="status" value={Users.status} onChange={(e) => { handleChange(e); }}>
                    <option>Select Gender</option>
                    <option value="I am a man">I am a man</option>
                    <option value="I am a woman">I am a woman</option>
                </select><br />
                <select name="find" value={Users.find} onChange={(e) => { handleChange(e); }}>
                    <option>Select Option</option>
                    <option value="I want to find woman">I want to find woman</option>
                    <option value="I want to find man">I want to find man</option>
                </select><br />
                <label htmlFor="dob">Date of birth</label><br />
                <input type="date" name="dob" value={Users.dob} onChange={(e) => { handleChange(e); }} /><br />
                <label htmlFor="height">Height / </label>
                <label htmlFor="weight">weight</label><br />
                <input type="number" name="height" value={Users.height} onChange={(e) => { handleChange(e); }} placeholder="Height" />
                <input type="number" name="weight" value={Users.weight} onChange={(e) => { handleChange(e); }} placeholder="Weight" /><br />
                <button type="button" className='btn btn-primary' onClick={handleUsers}>{btnText}</button>
            </form>
        </div>
    )
}

export default UserForm
