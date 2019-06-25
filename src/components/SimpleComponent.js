// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
  constructor(){
    super()

    this.state = {
      mood: happy
    }
  }

  handleClick = () => {
    this.setState({
      mood: [...mood, mood: sad]
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}> I am just 
        {this.state.mood}
      </div>
    )
  }
}
