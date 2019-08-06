import React from 'react'
import classnames from 'classnames'

function Group(props) {
  const { children, className, ...rest } = props
  const classes = classnames(['i-post-details-group', className])

  return (
    <div className={classes}>
      {
        React.Children.map(children, child => (
          React.cloneElement(
            child,
            {...rest}
          )
        ))
      }
    </div>
  )
}

export default Group
