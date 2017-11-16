import React, {Component} from 'react'
import { Input } from 'semantic-ui-react'

class CreateMessage extends Component {

  state = {
    content: 'Please type your message'
  }

  handleChange = (event) => {
    this.setState({content: event.target.value})
  }

  render() {
    return (<form style={inputField} onSubmit={() => this.props.submit(this.state.content)}>
        <textarea  style={textArea} value={this.state.content} onChange={this.handleChange}/>
        <div style={{marginTop: '8px'}}><Input type="submit"/></div>
    </form>)
  }
}

const inputField = {
  textAlign: 'left',
  marginLeft: '10px',
  marginTop: '10px',
  margingRight: '10px'
}

const textArea = {
  width: '380px',
  height: '200px',
  margingRight: '10px'
}

export default CreateMessage;
