import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calculator from '../../Components/Calculator'

const onClickKey = (event, { value }) => {
  console.log('onClickKey', value)
}

class CalculatorContainer extends Component {
  componentDidMount() {
    console.log('props', this.props)
  }

  render() {
    return (
      <Calculator
        screenContent='0'
        onClickKey={onClickKey} 
      />
    )
  }
}

export default connect(state => state)(CalculatorContainer)
