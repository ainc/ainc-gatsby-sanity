import React, { Component } from 'react'

import * as styles from '../shield.module.scss'

const Shield = ({text}) => {

        return (
            <div className={`${styles.shieldPanel}`}>
                <div className={`${styles.shieldDiv} justify-content-center`}>
                    <p className={` ${styles.shieldText} text-white`}>{text}</p>
                </div>
            </div>
        )
}

export default Shield
