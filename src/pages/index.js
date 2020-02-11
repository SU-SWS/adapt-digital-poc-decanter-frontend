import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  // const posts = data.allMarkdownRemark.edges
  const posts = data.allContentfulBlogPost.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All Blog posts" />
      <Bio />
      {posts.map(({ node }) => {
        // const title = node.frontmatter.title || node.fields.slug
        const title = node.title || node.slug
        // const title = node.frontmatter.title
        return (
          // <article key={node.fields.slug}>
          <article key={node.title}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {/*<Link style={{ boxShadow: `none` }} to={node.fields.slug}>*/}
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                {/*<Link style={{ boxShadow: `none` }} to={node.frontmatter.title}>*/}
                  {title}
                </Link>
              </h3>
                {/*<p class={ node.heroImage.fluid.src }>This is a Test to Check Image URL</p>*/}
                {/*<img src={{node.heroImage.fluid.src}}>*/}
                {/*<img src={ node.heroImage.fluid.src } alt={ node.heroImage.title } >*/}
                {/*<img src={ node.heroImage.fluid.src } alt="image test" >*/}
                {/*<img src="//images.ctfassets.net/gd2ffxv8xwyc/4shwYI3POEGkw0Eg6kcyaQ/e58118fb0bf8917b09dcd0fd83295a05/felix-russell-saw-112140.jpg?w=800&q=50" alt={{ node.heroImage.title }} >*/}
                <section>
                    <p
                        dangerouslySetInnerHTML={{
                            // __html: node.body.childMarkdownRemark.excerpt,
                            // __html: node.frontmatter.description || node.excerpt,
                            __html: node.body.childMarkdownRemark.excerpt,
                        }}
                    />
                </section>

                <div><strong>Topic:</strong> {node.tags}</div>
                <div><strong>Published:</strong> {node.publishDate}</div>
            </header>

          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

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
 allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  allContentfulBlogPost {
    edges {
      node {
        slug
        title
        publishDate 
        description {
          id
        }
        tags
        author {
          id
        }
        heroImage {
          fluid {
            src
          }
        }
        body {
          childMarkdownRemark {
              excerpt
            }
          }
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
