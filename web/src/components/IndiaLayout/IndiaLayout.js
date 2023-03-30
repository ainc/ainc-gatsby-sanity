import React from 'react'
import IndiaBanner from '../IndiaBanner/IndiaBanner'
import IndiaHeader from '../IndaHeader/IndiaHeader'
import IndiaFooter from '../IndiaFooter/IndiaFooter'

import "../../styles/layout.css";

const IndiaLayout = ({ pageTitle, children }) => (
    <div>
        <title>{pageTitle} | This will be dynamic later</title>
        <IndiaBanner />
        <IndiaHeader />
    <div>
    {children}
    </div>
    <IndiaFooter />
    </div>

);

export default IndiaLayout;