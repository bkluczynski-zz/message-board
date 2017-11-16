import React, { Component } from 'react';
import './App.css';
import CreateMessage from './components/CreateMessage'
import { Icon,Button } from 'semantic-ui-react'
import { getFullDate } from './utils/helpers'
import * as MessagesAPI from './utils/MessagesAPI'


class App extends Component {

    state = {
      messages: []
    }

    getMessages = () => {
      MessagesAPI.getAll()
      .then(messages => this.setState({messages : this.sortByDates(messages)}))
    }

    componentDidMount(){
      this.getMessages();
    }

    createMessage = (content) => {
      MessagesAPI.create(content)
    }

    voteMessage = (id, option) => {
      MessagesAPI.vote(option, id)
      const { messages } = this.state;
      messages.filter(message => message.id === id).map(message => {
        if (option === 'upVote'){
          message.score += 1;
          return message;
        } else {
          message.score -= 1;
          return message;
        }
      })
      this.setState({messages})
    }

    sortByDates = (items) => {
      return items.sort((a,b) => {
        return new Date(a.timestamps).getTime() - new Date(b.timestamps).getTime()
      }).reverse()
    }




    render() {
      console.log("messages", this.state.messages)
    return (
      <div className="App">
        <h1>Messages</h1>
        <CreateMessage submit={this.createMessage} />
        { this.state.messages && this.state.messages.map(message =>
          (
          <div style={messageStyle} key={message.id}>{`${message.content} :${getFullDate(message.timestamps)}, current scoreVote: ${message.score}`}
          <div>
            <Button onClick={() => this.voteMessage(message.id, "upVote")}>
              <Icon name="thumbs up"/>
            </Button>
            <Button onClick={() => this.voteMessage(message.id, "downVote")}>
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
  border: '2px solid blue'
}

export default App;
