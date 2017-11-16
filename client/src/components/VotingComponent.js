import React from 'react'
import {Icon, Button} from 'semantic-ui-react'


const VotingComponent = ({voteMessage, message}) => {


  return (
    <div>
      <Button onClick={() => voteMessage(message.id, "upVote")}>
        <Icon name="thumbs up"/>
      </Button>
      <Button onClick={() => voteMessage(message.id, "downVote")}>
        <Icon name="thumbs down"/>
      </Button>
    </div>
  )

}

export default VotingComponent;
