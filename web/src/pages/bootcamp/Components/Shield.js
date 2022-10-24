import React, { Component } from 'react'

import * as styles from './Shield.module.scss'

const Shield = ({text}) => {

        return (
            <div className={styles.shieldPanel}>
                <div className={styles.shieldText}>
                    <h6 className="text-white">{text}</h6>
                </div>
            </div>
        )
    
}

export default Shield
