import React from 'react'
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

const Key = ({ content, type = false }) => (
  <Button
    className={keyClassName(typeToString(type))}
    content={content}
  />
)

export default Key
