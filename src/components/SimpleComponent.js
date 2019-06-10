// Code SimpleComponent Here
import React from 'react'

export default class SimpleCompoenent extends React.Component {
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }
    }

    handleMood = (event) => {
        this.state.mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"})
    }

    render() {
        return(
            <div onClick={this.handleMood}>
                {this.state.mood}
            </div>
        )
    }
}

