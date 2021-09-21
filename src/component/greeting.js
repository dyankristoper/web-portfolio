// Implemented using class
import React, { Component } from 'react'

export default class Greeting extends Component {
    render() {
        return (
            <p className="background-blue">Greetings from {this.props.greet}</p>
        )
    }
}
