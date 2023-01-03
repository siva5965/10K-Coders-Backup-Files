import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        allUsers: state,
    }
}
console.log(connect(mapStateToProps))
// export default User
export default connect(mapStateToProps)(User)