import React, { Component } from 'react'

import * as styles from '../shield.module.scss'

const Shield = ({text}) => {

        return (
            <div className={`${styles.shieldPanel} mx-auto my-auto`}>
                <div className={`${styles.shieldText} mx-5` }>
                    <h3 className={`}text-white fs-6`}>{text}</h3>
                </div>
            </div>

            // <div className={`${styles.shieldPanel} mx-auto my-auto`}>
            //     <h3 className={`${styles.shieldText}text-white fs-6`} >{text}</h3>
            // </div>
        )
    
}

export default Shield
