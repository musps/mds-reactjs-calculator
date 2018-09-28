const defaultState = {
  sum: 10,
  query: []
}

const actionList = ['.', '=', '+', '-', 'x']

const checkIsOperator = nextValue => (actionList.indexOf(nextValue) !== -1)

const makeQuery = (state, nextValue) => {
  console.log('makeQuery', nextValue)
  return mergeQuery(state, nextValue)
}

const mergeQuery = (state, nextValue) => ({
  ...state,
  query: [...state.query, nextValue]
})

const updateQuery = (state, lastQuery, nextValue) => {
  nextValue = lastQuery.value + nextValue
  state.query[lastQuery.index] = nextValue
  return {...state}
}

const getLastQuery = (state) => {
  const arrSize = state.query.length
  if (arrSize === 0) {
    return false
  }
  const lastQueryIndex = arrSize - 1
  return {
    index: lastQueryIndex,
    value: state.query[lastQueryIndex]
  }
}

const addQuery = (state, nextValue) => {
  const isOperator = checkIsOperator(nextValue)
  const lastQuery = getLastQuery(state)

  console.log('addQuery', {
    nextValue,
    isOperator,
    lastQuery: lastQuery
  })

  if (isOperator) {
    return makeQuery(state, nextValue)
  } else if (lastQuery === false) {
    return mergeQuery(state, nextValue)
  } else if (checkIsOperator(lastQuery.value)) {
    return mergeQuery(state, nextValue)
  } else {
    return updateQuery(state, lastQuery, nextValue)
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
