import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const EventTemplate = ({ data, pageContext, location }) => {
  const event = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={event.eventTitle}
        description={event.eventDescription || event.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {event.eventTitle}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {event.eventStartDate}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: event.eventDescription }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.path} rel="prev">
                ← {previous.eventTitle}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.path} rel="next">
                {next.eventTitle} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default EventTemplate

export const pageQuery = graphql`
  query MyEventQuery {
    site {
      siteMetadata {
        title
      }
    }
  allContentfulEvent {
    nodes {
      eventTitle
      eventStartDate
      eventEndDate
      path
      eventDescription
    }
  }
  }
`
