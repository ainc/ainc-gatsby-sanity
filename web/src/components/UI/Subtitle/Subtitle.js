import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as styles from '../../../styles/Variables'

const StyleSubtitle = styled.h2`

  @font-face {
    font-family: 'The-Bohemian-Regular';
    src: local('The-Bohemian-Regular'),
        url('/web/src/assets/fonts/The-Bohemian-Regular.woff') format('woff');
  }
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
  &.subtitle--tiny{
    font-size: ${styles.styles.sizes.subtitle_tiny}
  }
  &.fancy-font {
    font-size: 3.2rem;
    font-family: 'The-Bohemian-Regular';
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
