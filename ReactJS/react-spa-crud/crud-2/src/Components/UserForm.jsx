import React from 'react'

const UserForm = ({handleChange,user,addUser,handleSubmit,btnText}) => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="number" className="form-control" value={user.id} name="id" disabled onChange={(e) => { handleChange(e) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input type="text" className="form-control" value={user.fname} name="fname" onChange={(e) => { handleChange(e) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" value={user.lname} name="lname" onChange={(e) => { handleChange(e) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" value={user.dob} name="dob" onChange={(e) => { handleChange(e) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={user.email} name="email" onChange={(e) => { handleChange(e) }} />

                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile Number</label>
                    <input type="tel" className="form-control" value={user.mobile} name="mobile" onChange={(e) => { handleChange(e) }} />
                </div>

                <button type="button" className="btn btn-primary" onClick={handleSubmit}>{btnText}</button>
            </form>
        </div>
    )
}

export default UserForm
