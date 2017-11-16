import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
      messages: []
    }

    componentDidMount(){
      fetch('/api/messages')
        .then(res => res.json())
        .then(messages => {
          const data = messages.data
          this.setState({ messages: data})
        })
      }

    render() {
    return (
      <div className="App">
        <h1>Messages</h1>
        {this.state.messages.map(message =>
          (
          <div style={messageStyle} key={message.id}>{`${message.content} : ${message.timestamps}`}</div>
          )
        )}
      </div>
    );
  }
}

const messageStyle = {
  fontSize: '15px',
  padding: '30px',
  margin: '10px',
  textAlign: 'center',
  border: '2px solid blue'
}

export default App;
