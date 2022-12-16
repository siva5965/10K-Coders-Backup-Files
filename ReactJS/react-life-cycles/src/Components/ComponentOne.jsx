import React, { Component } from 'react'

export default class ComponentOne extends Component {

    componentWillUnmount() {
        alert("The component is going to be unmounted")
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

class App extends React.Component {
    state = { display: true }
    delete = () => {
        this.setState({ display: false })
    }

    render() {
        let comp;
        if (this.state.display) {
            comp = <ComponentOne />;
        }
        return (
            <div>
                {comp}
                <button onClick={this.delete}>Delete the component</button>
            </div>
        )
    };

}
