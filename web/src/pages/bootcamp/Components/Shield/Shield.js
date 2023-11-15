import React, { Component } from 'react'

import * as styles from '../shield.module.scss'

const Shield = ({text}) => {

        return (
            <div className={`${styles.shieldPanel}`}>
                <div className={`${styles.shieldText} mt-5 pt-5 justify-content-center`}>
                    <p style={{fontSize: "15px"}} className={`text-white mt-3`}>{text}</p>
                </div>
            </div>
        )
}

export default Shield
