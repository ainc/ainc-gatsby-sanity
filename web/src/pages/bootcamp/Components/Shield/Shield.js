import React, { Component } from 'react'

import * as styles from '../shield.module.scss'

const Shield = ({text}) => {

        return (
            <div className={`${styles.shieldPanel} mx-auto my-auto`}>
                <div className={`${styles.shieldText} mx-5 `}>
                    <h6 className="text-white" style={{overflowWrap: "break-word"}}>{text}</h6>
                </div>
            </div>
        )
    
}

export default Shield
