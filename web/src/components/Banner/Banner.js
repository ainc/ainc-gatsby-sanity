import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import * as styles from './Banner.module.scss'
import { useLocation } from "@reach/router";

const Banner = () => {

  const bannerData = useStaticQuery(
    graphql`
      query newfiveAcrossQuery($currentDate: Date) {
        allSanityEvents(
          filter: {reference: {eventTypeName: {eq: "5 Across"}}, date: {gte: $currentDate}}
          sort: {date: ASC}
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
  const location = useLocation();

  // Function to check if the banner should be displayed
  const shouldDisplayBanner = () => {
    // Check if the current pathname is not '/bootcamp' and the screen size is not small
    return location.pathname !== '/bootcamp' && window.innerWidth > 768; // Adjust the screen size threshold as needed
  };
  const currentDate = new Date().toISOString().slice(0, 10);

  const upcoming = bannerData.allSanityEvents.nodes.filter(event => new Date(event.date) >= new Date(currentDate));
  const showUpcoming = currentDate > upcoming ? null : <p>Sign up <a href={upcoming[0].linkToEvent}>here</a> for 5 Across - {upcoming[0].date} </p>; 

  return (
    shouldDisplayBanner() && (
    <div role="banner" className={`${styles.banner}`}>
      { showUpcoming }
    </div>
    )
  )
}

export default Banner