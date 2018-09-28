import React, { Component } from 'react'
import { connect } from 'react-redux'

import Calculator from '../../Components/Calculator'
import { calculatorAddQuery } from '../../Store/calculator/actions'

const onClickKey = (event, { value }, dispatch) => {
  dispatch(calculatorAddQuery(value))
}

const queryToString = query => query.join(' ')

class CalculatorContainer extends Component {
  componentDidMount() {
    //.
  }

  render() {
    const { dispatch, calculator: { sum, query } } = this.props

    return (
      <Calculator
        query={queryToString(query)}
        sum={sum}
        onClickKey={(event, props) => onClickKey(event, props, dispatch)} 
      />
    )
  }
}

export default connect(state => state)(CalculatorContainer)
