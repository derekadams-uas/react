import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
    }

    updateCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <button color={this.props.color} onClick={this.updateCount}></button>
        )
    }
}

export default CounterButton;
