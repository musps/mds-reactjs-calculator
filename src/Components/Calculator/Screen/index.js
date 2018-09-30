import React from 'react'
import { Segment, Input, Divider } from 'semantic-ui-react'

const Screen = ({ currentValue, operator, sum }) => (
  <Segment attached className='screen'>
    <Input disabled value={sum} className='screen__input' />
    <Divider horizontal>
      {operator}
    </Divider>
    <Input disabled value={currentValue} className='screen__input' />
  </Segment>
)

export default Screen
