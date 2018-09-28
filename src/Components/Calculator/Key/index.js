import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import classNames from 'classnames'

const typeToString = (type) => {
  switch (type) {
    case 'big':
      return 'key__big'
    break;
    default:
      return false
    break;
  }
}

const keyClassName = (type) => (classNames({
  key: true,
  [type]: type !== false
}))

const Key = ({ 
  value,
  content,
  type = false,
  onClick
}) => (
  <Button
    className={keyClassName(typeToString(type))}
    value={value}
    content={content}
    onClick={onClick}
  />
)

class KeyComponent extends  Component {
  state = {
    value: ''
  }

  render () {
    const { value, content, type, onClick } = this.props

    return <Key
      value={value}
      content={content}
      type={type}
      onClick={onClick}
    />
  }
}

export default KeyComponent
