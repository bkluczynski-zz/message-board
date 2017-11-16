import React, { Component } from 'react'

class CreateMessage extends Component {

  state = {
    content: 'Please type your message',
  }

  handleChange = (event) => {
    this.setState({content: event.target.value})
  }


  render(){
    return (

    <form onSubmit={() => this.props.submit(this.state.content)}>
      <label>
        Content:
        <textarea value={this.state.content} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>


    )
  }
}

export default CreateMessage;
