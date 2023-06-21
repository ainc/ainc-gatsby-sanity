import * as React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as styles from '../../../styles/Variables'

const StyleBrandButton = styled.button`
    font-family: ${styles.styles.fonts.baseFont};
    font-weight: 600;
    letter-spacing: 3px;
    background-color: ${styles.styles.colors.brand};
    padding: 0.5rem 2rem;
    color: white;
    overflow: hidden;
    display: inline-block;
    text-transform: uppercase;
    font-size: ${styles.styles.sizes.text};
    border: 2px solid ${styles.styles.colors.brand};
    border-radius: 4px;
    position: relative;

    @media only screen and (max-width: ${styles.styles.screens.mobile}) {
        font-size: ${styles.styles.sizes.text_tiny};
        padding: 0.3rem 1rem;
    }

    &.disabled,
    &[disabled],
    fieldset[disabled] & {
        cursor: not-allowed;
    }

    &:hover {
        color: ${styles.styles.colors.brand2};
    }
    &.hover--black {
        &:hover {
            color: ${styles.styles.colors.brand2};
        }
    }

    &.secondary {
        background-color: ${styles.styles.colors.brand2};
        border-color: ${styles.styles.colors.brand2};
        &:hover {
            color: ${styles.styles.colors.brandGrey};
        }
    }

    &.btn--small {
        font-size: ${styles.styles.sizes.text};
        padding: 0.4rem 1.4rem;
    }
`

const BrandButton = (props) => {
    return (
        <StyleBrandButton {...props} >
            {props.children}
        </StyleBrandButton>
    ) 
}

BrandButton.propTypes = {
    childen: PropTypes.oneOfType([
        PropTypes.string,
    ])
}
 
export default BrandButton;
