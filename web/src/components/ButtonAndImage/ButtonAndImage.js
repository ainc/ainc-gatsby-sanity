import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ImageOutline from '../ImageOutline/ImageOutline'
import { tbDiv, teamButton } from './ButtonAndImage.module.scss'

const TeamButton = (props) => {
  return (
    <div className={`${tbDiv}`}>
      <ImageOutline>
        <GatsbyImage className='img-red-outline' image={getImage(props.img)} alt={props.imgAlt} />
      </ImageOutline>
      <button {...props} className={`${teamButton}`}>
        {props.children}
      </button>
    </div>
  ) 
}

TeamButton.propTypes = {
  img: PropTypes.any.isRequired,
  imgAlt: PropTypes.string,
}

TeamButton.defaultProps = {
  imgAlt: "Unknown image",
}

export default TeamButton