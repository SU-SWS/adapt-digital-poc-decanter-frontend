// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const event = path.resolve(`./src/templates/blog-event.js`)
//   const result = await graphql(
//     `
//       {
//         allContentfulEvent {
//           edges {
//             node {
//               id
//               path
//             }
//           }
//         }
//         allMarkdownRemark(
//           sort: { fields: [frontmatter___date], order: DESC }
//           limit: 1000
//         ) {
//           edges {
//             node {
//               fields {
//                 path
//               }
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     throw result.errors
//   }

//   // Create blog events pages.
//   const events = result.data.allContentfulEvent.edges

//   events.forEach((event, index) => {
//     const previous = index === events.length - 1 ? null : events[index + 1].node
//     const next = index === 0 ? null : events[index - 1].node

//     createPage({
//       path: event.node.path,
//       component: event,
//       context: {
//         slug: event.node.path,
//         previous,
//         next,
//       },
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `path`,
//       node,
//       value,
//     })
//   }
// }
