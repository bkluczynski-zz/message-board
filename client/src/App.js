import React, { Component } from 'react';
import './App.css';
import CreateMessage from './components/CreateMessage'
import { dateFormatter } from './utils/helpers'
import { Icon,Button } from 'semantic-ui-react'


class App extends Component {

    state = {
      messages: []
    }

    getMessages = () => {
      fetch('/api/messages')
        .then(res => res.json())
          .then(messages => {
            const data = messages.data
            this.setState({ messages: data})
          })
    }


    componentDidMount(){
      this.getMessages();
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

      vote = (id, option) => {
        fetch(`/api/messages/${id}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'PUT',
          body: JSON.stringify({
            options: option
          })
        })
        .then(() => {
          this.getMessages();
        })
      }


    render() {

      console.log("messages", this.state.messages)
    return (
      <div className="App">
        <h1>Messages</h1>
        <CreateMessage submit={this.createMessage} />
        { this.state.messages && this.state.messages.map(message =>
          (
          <div style={messageStyle} key={message.id}>{`${message.content} : ${message.timestamps}, current scoreVote: ${message.score}`}
          <div>
            <Button onClick={() => this.vote(message.id, "upVote")}>
              <Icon name="thumbs up"/>
            </Button>
            <Button onClick={() => this.vote(message.id, "downVote")}>
              <Icon name="thumbs down"/>
            </Button>
          </div>
          </div>
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
