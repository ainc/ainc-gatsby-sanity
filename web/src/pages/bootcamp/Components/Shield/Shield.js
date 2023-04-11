import React, { Component } from 'react'

import * as styles from '../shield.module.scss'

const Shield = ({text}) => {

        return (
            <div className={`${styles.shieldPanel} mx-auto my-auto`}>
                <div className={`${styles.shieldText} mx-5 `}>
                    <h3 className="text-white fs-6" style={{overflowWrap: "break-word"}}>{text}</h3>
                </div>
            </div>
        )
    
}

export default Shield
