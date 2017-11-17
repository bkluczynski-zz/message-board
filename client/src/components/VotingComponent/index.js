import React from 'react'
import VoteButton from '../VoteButton'

const VotingComponent = ({voteMessage, message}) => {


  return (
    <div id='voting'>
      <VoteButton voteMessage={voteMessage} message={message} icon={"thumbs up"} vote={"upVote"}/>
      <VoteButton voteMessage={voteMessage} message={message} icon={"thumbs down"} vote={"downVote"}/>
    </div>
  )

}
export default VotingComponent;
