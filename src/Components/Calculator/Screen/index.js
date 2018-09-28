import React from 'react'
import { Segment } from 'semantic-ui-react'

const Screen = ({ content }) => (
  <Segment attached className='screen'>
    {content}
  </Segment>
)

export default Screen
