import React, {Component} from 'react';
import './App.css';
import CreateMessage from './components/CreateMessage'
import {getFullDate} from './utils/helpers'
import * as MessagesAPI from './utils/MessagesAPI'
import DisplayMessage from './components/DisplayMessage'

class App extends Component {

  state = {
    messages: []
  }

  getMessages = () => {
    MessagesAPI.getAll().then(messages => this.setState({messages: this.sortByDates(messages)}))
  }

  componentDidMount() {
    this.getMessages();
  }

  createMessage = (content) => {
    MessagesAPI.create(content)
  }

  voteMessage = (id, option) => {
    MessagesAPI.vote(option, id)
    const {messages} = this.state;
    messages.filter(message => message.id === id).map(message => {
      if (option === 'upVote') {
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
    return items.sort((a, b) => {
      return new Date(a.timestamps).getTime() - new Date(b.timestamps).getTime()
    }).reverse()
  }

  render() {
    return (<div className="App">
      <h1 style={{position: 'relative', float: 'right', marginRight: '10px'}}>Board of messages</h1>
      <CreateMessage submit={this.createMessage}/> {
        this.state.messages && this.state.messages.map(message => (<div key={message.id}>
          <DisplayMessage message={message} getFullDate={getFullDate} style={messageStyle} voteMessage={this.voteMessage}/>
        </div>))
      }
    </div>)
  }

}

const messageStyle = {
  fontSize: '15px',
  padding: '30px',
  margin: '10px',
  border: '2px solid blue',
  textAlign: 'left',
}

export default App;
