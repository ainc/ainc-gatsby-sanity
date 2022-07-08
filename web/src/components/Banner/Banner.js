import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './Banner.module.scss'

const Banner = () => {
  
  
  return (
    <div
      className={`alert-danger ${styles.banner}`}
      dangerouslySetInnerHTML={{__html: "This is to be replaced by a query"}}
    />
  )

}

export default Banner