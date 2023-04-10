import * as React from 'react'
import * as styles from './IndiaBanner.module.scss'

const IndiaBanner = () => {
    return (
        <div className={styles.indiaBanner}>
            <p>Join Coding Club <a href='https://docs.google.com/forms/d/e/1FAIpQLSeZR3oNFEjkpWVP4Bdmqj1eJFee5O466K7_UAFowuRVPKJzvg/viewform?vc=0&c=0&w=1&flr=0'>Today</a></p>
        </div>
    )
}

export default IndiaBanner;