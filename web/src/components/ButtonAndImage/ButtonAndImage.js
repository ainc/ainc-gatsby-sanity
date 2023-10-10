import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage, StaticImage} from 'gatsby-plugin-image'
import ImageOutline from '../ImageOutline/ImageOutline'
import { tbDiv, teamButton } from './ButtonAndImage.module.scss'
import ApplyNowModal from '../../pages/fellowship/Components/ApplyNowModal'
import { useState } from 'react'
import ModalCustom from '../Modal/ModalCustom'


const TeamButton = (props) => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true); 

  return (
    <div className={`${tbDiv}`} {...props}>
      <ImageOutline>
        <GatsbyImage className='img-red-outline' image={getImage(props.img.src)} alt={props.imgAlt} />
      </ImageOutline>
      <button onClick={handleShow} {...props} className={`${teamButton}`}>
        {props.children}
        
      </button>

    <ModalCustom
    centered
    lgShow={lgShow}
    hide={handleClose}
    content={
      <iframe width="100%" height="500" src={props.to} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    }
    />
    </div>
  ) 
}

ButtonAndImage.propTypes = {
  img: PropTypes.any.isRequired,
  imgAlt: PropTypes.string,
}

ButtonAndImage.defaultProps = {
  imgAlt: "Unknown image",
}

export default ButtonAndImage;