const defaultState = {
  sum: '',
  currentValue: '',
  operator: null
}

const dot = '.'
const maker = '='
const operators = ['+', '-', 'x']

const isOperator = nextValue => (operators.indexOf(nextValue) !== -1)
const containsDot = value => (value.indexOf(dot) !== -1)

const mergeQuery = (state, nextValue) => ({
  ...state,
  currentValue: state.currentValue + nextValue
})

const addOperator = (state, nextValue) => ({
  sum: state.currentValue,
  currentValue: '',
  operator: nextValue
})

const makeQuery = (state) => {
  let { sum, currentValue, operator } = state

  try {
    sum = new Number(sum)
    currentValue = new Number(currentValue)

    switch (operator) {
      case '+':
        sum = sum + currentValue
      break;
      case '-':
        sum = sum - currentValue
      break;
      case 'x':
        sum = sum * currentValue
      break;
    }
  } catch (e) {
    return state
  }

  return {
    sum: '',
    currentValue: sum.toString(),
    operator: null
  }
}

const addQuery = (state, nextValue) => {
  const { sum, currentValue, operator } = state
  const respIsOperator = isOperator(nextValue)
  const respContainsDot = containsDot(currentValue)

  switch (true) {
    case respIsOperator && currentValue !== '' && operator === null:
      return addOperator(state, nextValue)
      break;
    case nextValue === '=' && sum !== '' && currentValue !== '' && operator !== null:
      return makeQuery(state)
      break;
    case (!respIsOperator && nextValue !== dot) || (!respIsOperator && nextValue === dot && !respContainsDot):
      return mergeQuery(state, nextValue)
      break;
    default:
      return state
      break;
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CALCULATOR_ADD_QUERY':
      return addQuery(state, action.nextValue)
      break;
    default:
      return state
      break;
  }
}

export default reducer
