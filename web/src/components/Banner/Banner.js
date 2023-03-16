import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import * as styles from './Banner.module.scss'

const Banner = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <div className={`${styles.banner}`}>
      <StaticQuery
        query={upcoming_5a}
        render={data => {
          //filter for event with date greater than or equal to today's date
          const upcoming = data.allSanityEvents.nodes.filter(event => new Date(event.date) >= new Date(currentDate));

          return (
            <p>Sign up <a href={upcoming[0].linkToEvent}>here</a> for 5 Across - {upcoming[0].date} </p>
          )
        }}/>
    </div>
  )
}

export const upcoming_5a = graphql`
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
  }`;

export default Banner