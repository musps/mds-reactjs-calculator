import React from 'react'
import { Provider } from 'react-redux'
import './App.scss'

import rootStore from '../Store/rootStore'

import CalculatorContainer from '../Containers/Calculator'

const App = () => (
  <Provider store={rootStore}>
    <div className="main">
      <CalculatorContainer />
    </div>
  </Provider>
)

export default App
