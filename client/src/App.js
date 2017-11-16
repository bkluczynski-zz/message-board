import React, { Component } from 'react';
import './App.css';
import CreateMessage from './components/CreateMessage'
import { dateFormatter } from './utils/helpers'

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

      createMessage = (content) => {
            fetch('/api/messages', {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({
                content: content,
                timestamps: dateFormatter(new Date()),
                score: 0
              })
              })
              .then(x => console.log('success', x)).catch((err) => console.error('fail', err));
      }
    render() {
    return (
      <div className="App">
        <h1>Messages</h1>
        <CreateMessage submit={this.createMessage} />
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
