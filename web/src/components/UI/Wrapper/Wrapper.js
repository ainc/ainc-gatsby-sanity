import React from 'react'
import PropTypes from 'prop-types'
// CSS
import { Container } from './Wrapper.module.scss'

const wrapper = (props) => {
  return (
    <div className={Container}>
      {props.children}
    </div>
  )
}

wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.object,
    PropTypes.element
  ])
}

export default wrapper
