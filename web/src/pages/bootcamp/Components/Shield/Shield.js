import React, { Component } from 'react'

import * as styles from '../shield.module.scss'

const Shield = ({text}) => {

        return (
            <div style={{backgroundColor:""}} className={`${styles.shieldPanel}`}>
                <div style={{backgroundColor:""}} className={`${styles.shieldText} mt-5 pt-5 justify-content-center`}>
                    <p style={{fontSize: "12px"}} className={`text-white fs-6`}>{text}</p>
                </div>
            </div>

            // <div className={`${styles.shieldPanel} mx-auto my-auto`}>
            //     <h3 className={`${styles.shieldText}text-white fs-6`} >{text}</h3>
            // </div>
        )
    
}

export default Shield
