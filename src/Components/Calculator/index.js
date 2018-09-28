import React from 'react'
import './Calculator.styles.scss'

import Grid from './Grid'
import Key from './Key'
import Keys from './Keys'
import Screen from './Screen'

const Calculator = () => (
  <Grid.Calculator>
    <Screen />
    <Keys>
      <Grid.Col>
        <Grid.Row>
          <Key content='7' />
          <Key content='8' />
          <Key content='9' />
        </Grid.Row>
        <Grid.Row>
          <Key content='4' />
          <Key content='5' />
          <Key content='6' />
        </Grid.Row>
        <Grid.Row>
          <Key content='1' />
          <Key content='2' />
          <Key content='3' />
        </Grid.Row>
        <Grid.Row>
          <Key content='0' />
          <Key content='.' />
          <Key content='=' />
        </Grid.Row>
      </Grid.Col>
      <Grid.Col>
        <Key content='x' />
        <Key content='-' />
        <Key content='+' type='big' />
      </Grid.Col>
    </Keys>
  </Grid.Calculator>
)

export default Calculator
