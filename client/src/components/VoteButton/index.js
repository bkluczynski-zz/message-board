import React from 'react'
import {Icon, Button} from 'semantic-ui-react'

const VoteButton = ({voteMessage, message, vote, icon}) => {
  return (
    <Button onClick={() => voteMessage(message.id, vote)} className="vote">
      <Icon name={icon}/>
    </Button>
  )
}

export default VoteButton;
