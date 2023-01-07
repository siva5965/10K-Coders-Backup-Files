import React from 'react'

const UserForm = ({handleChange,Registrations,handleCollege,btnText}) => {
  return (
    <div>
       <form >
      <label htmlFor="">ID:</label>
        <input
          type="number"
          name="id"
          disabled
          value={Registrations.id}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">University:</label>
        <input
          type="text"
          name="university"
          value={Registrations.university}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Institute</label>
        <input
          type="text"
          name="institute"
          value={Registrations.institute}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Branch</label>
        <select
          name="branch"
          value={Registrations.branch}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option>select branch</option>
          <option value={"Mechanical"}>MECH</option>
          <option value={"Electrical"}>ECE</option>
          <option value={"Civil"}>Civil</option>
          <option value={"cse"}>CSE</option>
          <option value={"EEE"}>EEE</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Degree</label>
        <select
          name="degree"
          value={Registrations.degree}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option>select branch</option>
          <option value={"B.Tech"}>B.Tech</option>
          <option value={"M.Tech"}>M.Tech</option>
          <option value={"Degree"}>Degree</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Status</label>
        <input
          type="radio"
          name="status"
          value={"pursuing"}
          onChange={(e) => {
            handleChange(e);
          }}
          checked={Registrations.status === "pursuing"}
        />
        Pursuing
        <input
          type="radio"
          name="status"
          value={"Completed"}
          onChange={(e) => {
            handleChange(e);
          }}
          checked={Registrations.status === "Completed"}
        />
        Completed
        <br />
        <br />
        <label htmlFor="">Average</label>
        <input
          type="number"
          name="average"
          value={Registrations.average}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">Experience</label>
        <input
          type="number"
          name="experience"
          value={Registrations.experience}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="">website</label>
        <input
          type="text"
          name="website"
          value={Registrations.website}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <br />
        <button type='button'className='btn btn-primary' onClick={handleCollege}>{btnText}</button>
      </form>

    </div>
  )
}

export default UserForm