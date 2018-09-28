import { 
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import { createLogger } from 'redux-logger'

import calculatorStore from './calculator/reducer'

const logger = createLogger({
  // ...options
});

const reducers = combineReducers({
  calculator: calculatorStore
})

const middlewares = compose(
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  reducers,
  middlewares
)

export default store
