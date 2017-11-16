import React from 'react'
import VotingComponent from './VotingComponent'

const DisplayMessage = ({ style, message, getFullDate, voteMessage}) => {
  return (
    <div style={style} key={message.id}>
      <div style={messageContent}>{`${message.content}`}</div>
      <div style={dateAndThumbs}>{`${getFullDate(message.timestamps)}`}</div>
      <div style={dateAndThumbs}>{`Thumb awesomness: ${message.score}`}</div>
      <VotingComponent message={message} voteMessage={voteMessage}/>
    </div>
  )
}

const messageContent = {
  fontSize: '18px',
  paddingBottom: '10px'
}

const dateAndThumbs = {
  fontSize: '10px'
}

export default DisplayMessage;
