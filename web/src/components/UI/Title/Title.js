
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './Title.scss'

/*
const StyleTitle = styled.h1`
  font-family: ${styles.styles.fonts.headingFont};
  font-size: ${styles.styles.sizes.title};
  font-weight: 900;
  color: ${styles.styles.colors.brand2};
  letter-spacing: 2px;
  &.brand {
    color: ${styles.styles.colors.brand};
  }
  &.white {
    color: white;
  }
  &.text--huge {
    font-size: ${styles.styles.sizes.title_huge};

  }
  &.text--big {
    font-size: ${styles.styles.sizes.title_big};
  }
  &.text--medium {
    font-size: ${styles.styles.sizes.title_medium};
  }
  &.text--small {
    font-size: ${styles.styles.sizes.title_small};
  }
  &.text--tiny {
    font-size: ${styles.styles.sizes.title_tiny};
  }

  @media only screen and (max-width: ${styles.styles.screens.mobile}) {
    font-size: ${styles.styles.sizes.subtitle};
  }
`
*/
const Title = (props) => {
  return (
    <h1 {...props} className={`title ${props.className}`}>
      {props.children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
  ])
}


export default Title;
