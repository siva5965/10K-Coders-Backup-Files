import React, { Component } from 'react'
import ImageComponent from './ImageComponent'
import LifeCycleB from './LifeCycleB'

export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Welcome to Life Cycles",
            showImage:false

        }
        console.log("LifeCycleA Constructor Triggered !")
    }
    changeMessage = () => {
        this.setState({ message: "This Message will change from Welcome to Life Cycle A !" })
    }
    showHideImages=()=>{
        this.setState({showImage : ! this.state.showImage})
    }

    render() {
        console.log("LifeCycleA Render Triggered !")
        return (
            <div>
                <button onClick={this.changeMessage}>Get Values from Server</button>
                <LifeCycleB msg={this.state.message} />
                <button onClick={this.showHideImages}>Show/Hide</button>
                {this.state.showImage && <ImageComponent show={this.state.showImage}/>}
            </div>
        )
    }
    componentDidMount() {
        console.log("LifeCycleA componentDidMount Triggered !")
    }
    componentWillUnmount(){
        console.log("This Component is going to be Removed from DOM");
      }
}

// Component Mounting Phase
    // 1. Constructor
    // 2. Render
    // 3. Component Did Mount

// Component Update Phase
    // 1. shouldComponentUpdate
    // 2. Render
    // 3. componentDidUpdate
