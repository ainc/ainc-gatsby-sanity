import * as React from 'react'

import { imageOutline } from './ImageOutline.module.scss'

const ImageOutline = (props) => {
  return(
    <div className={`${imageOutline}`} {...props}>
      {props.children}
    </div>
  )
}

export default ImageOutline