import * as React from 'react'
import { useState } from 'react'

import ModalCustom from '../Modal/ModalCustom'

import { teamButton } from './ModalButton.module.scss'


const ModalButton = (props) => {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);
  const handleShow = () => setLgShow(true); 

  return (
    <div>
      <button onClick={handleShow} {...props} className={`${teamButton} text-center`}>
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


export default ModalButton;