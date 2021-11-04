import React, { Component, useState } from 'react';
import styles from './ball.layout.scss';

class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: Math.floor(Math.random() * 200 - 100 + 1),
            y: Math.floor(Math.random() * 200 - 100 + 1),
            z: Math.floor(Math.random() * 200 - 100 + 1),
            intervalID: Number
        };
    }

    componentDidMount() {
        this.setState({ intervalID: setInterval(this.forceUpdate(), 1000) })
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalID);
    }

    componentDidUpdate() {
        this.setState({
            x: Math.floor(Math.random() * 200 - 100 + 1),
            y: Math.floor(Math.random() * 200 - 100 + 1),
            z: Math.floor(Math.random() * 200 - 100 + 1)
        });
    }

    render() {
        const style = {
            transform: `translate(${x}px, ${y}px, ${z}px)`
        };
        return (
            <div className={styles.ball} style={style}></div>
        );
    }
}

export default Ball;