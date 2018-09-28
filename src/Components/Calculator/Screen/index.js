import React from 'react'
import { Segment } from 'semantic-ui-react'

const Screen = ({ query, sum }) => (
  <Segment attached className='screen'>
    {query}
    <hr />
    {sum}
  </Segment>
)

export default Screen
