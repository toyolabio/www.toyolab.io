const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const eventPost = path.resolve(`./src/templates/events-post.js`)
  return graphql(
    `
      {
        blogs: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/blog|announcements/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                title
                slug
              }
            }
          }
        }
        events: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/events/" } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const blogs = result.data.blogs.edges
    const events = result.data.events.edges

    blogs.forEach((blog, index) => {
      const previous = index === blogs.length - 1 ? null : blogs[index + 1].node
      const next = index === 0 ? null : blogs[index - 1].node

      createPage({
        path: blog.node.frontmatter.slug,
        component: blogPost,
        context: {
          slug: blog.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })

    events.forEach((event, index) => {
      const previous =
        index === events.length - 1 ? null : events[index + 1].node
      const next = index === 0 ? null : events[index - 1].node

      createPage({
        path: event.node.frontmatter.slug,
        component: eventPost,
        context: {
          slug: event.node.frontmatter.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
