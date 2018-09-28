import React from 'react'

export const Calculator = ({ children }) => (
  <div className='calculator'>
    {children}
  </div>
)

export const Row = ({ children }) => (
  <div className='row'>
    {children}
  </div>
)

export const Col = ({ children }) => (
  <div className='col'>
    {children}
  </div>
)

export default {
  Calculator,
  Row,
  Col
}
