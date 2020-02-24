import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const EventIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  // const events = data.allMarkdownRemark.edges
  const posts = data.allContentfulEvent.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Events" />
      <Bio />
      {posts.map(({ node }) => {
        // const title = node.frontmatter.eventTitle || node.fields.slug
        // const title = node.eventTitle || node.path
        // const title = node.eventTitle
        const title = node.eventTitle
        // const title = node.frontmatter.eventTitle
        return (


          // <article key={node.fields.slug}>
          // <article key={node.eventTitle}>
          <article key={node.eventTitle}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {/*<Link style={{ boxShadow: `none` }} to={node.fields.slug}>*/}
                <Link style={{ boxShadow: `none` }} to={node.path}>
                {/*<Link style={{ boxShadow: `none` }} to={node.frontmatter.eventTitle}>*/}
                  {title}
                </Link>
              </h3>
                {/*<p class={ node.heroImage.fluid.src }>This is a Test to Check Image URL</p>*/}
                {/*<img src={{node.heroImage.fluid.src}}>*/}
                {/*<img src={ node.heroImage.fluid.src } alt={ node.heroImage.title } >*/}
                {/*<img src={ node.heroImage.fluid.src } alt="image test" >*/}
                {/*<img src="//images.ctfassets.net/gd2ffxv8xwyc/4shwYI3POEGkw0Eg6kcyaQ/e58118fb0bf8917b09dcd0fd83295a05/felix-russell-saw-112140.jpg?w=800&q=50" alt={{ node.heroImage.title }} >*/}
                {/*<section>*/}
                {/*    <p*/}
                {/*        dangerouslySetInnerHTML={{*/}
                {/*            // __html: node.body.childMarkdownRemark.excerpt,*/}
                {/*            // __html: node.frontmatter.description || node.excerpt,*/}
                {/*            __html: node.intro.childMarkdownRemark.excerpt,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</section>*/}

                {/*<div><strong>Topic:</strong> {node.topic}</div>*/}
                {/*<div><strong>Topic2:</strong> {node.topic}</div>*/}

                <div>{node.eventDescription}</div>
                <div><strong>Date:</strong> {node.eventStartDate} - {node.eventEndDate}</div>
                <div><strong>End Date:</strong> {node.eventEndDate}</div>
            </header>

          </article>
        )
      })}
    </Layout>
  )
}

export default EventIndex

const document = {
    nodeType: 'document',
    data: {},
    content: [
        {
            nodeType: 'paragraph',
            data: {},
            content: [
                {
                    nodeType: 'text',
                    value: 'Hello world!',
                    marks: [],
                    data: {}
                },
            ],
        },
    ],
};

documentToReactComponents(document); // -> <p>Hello world!</p>



export const pageQuery = graphql`
query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  allContentfulEvent(
    sort:{
      fields: [eventStartDate]
      order: ASC
    }
  )  {
    totalCount
    edges {
      node {
        eventTitle
        eventStartDate(formatString: "MMMM Do, YYYY h:mm")
        eventEndDate(formatString: "MMMM Do, YYYY h:mm")
        path
        eventDescription
      }
    }
  }
}
`



//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
