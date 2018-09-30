import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calculator from '../../Components/Calculator'
import { calculatorAddQuery } from '../../Store/calculator/actions'

const onClickKey = (event, { value }, dispatch) => {
  dispatch(calculatorAddQuery(value))
}

class CalculatorContainer extends Component {
  render() {
    const { dispatch, calculator: { sum, currentValue, operator } } = this.props

    return (
      <Calculator
        currentValue={currentValue}
        operator={operator}
        sum={sum}
        onClickKey={(event, props) => onClickKey(event, props, dispatch)} 
      />
    )
  }
}

export default connect(state => state)(CalculatorContainer)
