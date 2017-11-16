import React, { Component } from 'react';
import logo from './logo.svg';
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
          <div style={{padding: 30}} key={message.id}>{`${message.content} : ${message.timestamps}`}</div>
          )
        )}
      </div>
    );
  }
}

export default App;
