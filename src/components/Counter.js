import React, { Component } from "react";
import styles from './counter.module.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            
            <div classname={ styles.counter }>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <p>Value from props: {this.props.value}</p>
            </div>

        );
    }
}

export default Counter