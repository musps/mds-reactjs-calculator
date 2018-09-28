import React from 'react'
import './Calculator.styles.scss'

import Grid from './Grid'
import Key from './Key'
import Keys from './Keys'
import Screen from './Screen'

const Calculator = ({ query, sum, onClickKey }) => (
  <Grid.Calculator>
    <Screen query={query} sum={sum} />
    <Keys>
      <Grid.Col>
        <Grid.Row>
          <Key value='7' content='7' onClick={onClickKey} />
          <Key value='8' content='8' onClick={onClickKey} />
          <Key value='9' content='9' onClick={onClickKey} />
        </Grid.Row>
        <Grid.Row>
          <Key value='4' content='4' onClick={onClickKey} />
          <Key value='5' content='5' onClick={onClickKey} />
          <Key value='6' content='6' onClick={onClickKey} />
        </Grid.Row>
        <Grid.Row>
          <Key value='1'content='1' onClick={onClickKey} />
          <Key value='2' content='2' onClick={onClickKey} />
          <Key value='3' content='3' onClick={onClickKey} />
        </Grid.Row>
        <Grid.Row>
          <Key value='0' content='0' onClick={onClickKey} />
          <Key value='.' content='.' onClick={onClickKey} />
          <Key value='=' content='=' onClick={onClickKey} />
        </Grid.Row>
      </Grid.Col>
      <Grid.Col>
        <Key value='x' content='x' onClick={onClickKey} />
        <Key value='-' content='-' onClick={onClickKey} />
        <Key value='+' content='+' type='big' onClick={onClickKey} />
      </Grid.Col>
    </Keys>
  </Grid.Calculator>
)

export default Calculator
