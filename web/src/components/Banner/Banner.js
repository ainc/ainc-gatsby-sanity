import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as styles from './Banner.module.scss'

const Banner = () => {

  const bannerData = useStaticQuery(
    graphql`
      query newfiveAcrossQuery($currentDate: Date) {
        allSanityEvents(
          filter: {reference: {eventTypeName: {eq: "5 Across"}}, date: {gte: $currentDate}}
          sort: {order: ASC, fields: date}
        ) {
          nodes {
            eventName
            date(formatString: "MMMM D, YYYY")
            host
            location
            linkToEvent
            picture {
            asset {
                gatsbyImageData
                }
            }
            reference {
            eventTypeName
            }
          }
        }
    }`
  )

  const currentDate = new Date().toISOString().slice(0, 10);

  const upcoming = bannerData.allSanityEvents.nodes.filter(event => new Date(event.date) >= new Date(currentDate));
  const showUpcoming = currentDate > upcoming ? null : <p>Sign up <a href={upcoming[0].linkToEvent}>here</a> for 5 Across - {upcoming[0].date} </p>; 

  return (
    <div role="banner" className={`${styles.banner}`}>
      { showUpcoming }
    </div>
  )
}

export default Banner