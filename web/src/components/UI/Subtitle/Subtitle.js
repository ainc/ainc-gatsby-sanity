import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as styles from '../../../styles/Variables'

const StyleSubtitle = styled.h2`
  font-family: ${styles.styles.fonts.headingFont};
  font-size: ${styles.styles.sizes.subtitle};
  font-weight: 400;
  margin-top: 0;
  color: ${styles.styles.colors.brand2};
  &.brand {
    color: ${styles.styles.colors.brand};
  }
  &.white {
    color: white;
  }
  letter-spacing: 1px;
  &.subtitle--small {
    font-size: ${styles.styles.sizes.subtitle_small};
  }
  &.fancy-font{
    font-family: ${styles.styles.fonts.fancyFont};
    font-size: 40px;
  }

  @media only screen and (max-width: ${styles.styles.screens.mobile}) {
    font-size: ${styles.styles.sizes.subtitle_small};
  }
`

const Subtitle = (props) => {
  return (
    <StyleSubtitle {...props}>
      {props.children}
    </StyleSubtitle>
  )
}

Subtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default Subtitle
