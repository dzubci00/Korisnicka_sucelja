/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Title from "../components/title"
import BlogNav, { leftArrow } from "../components/news-navigation"
import '../components/layout'


export default ({ pageContext, data }) => {
  const { post } = data
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
     

      <div style={{marginTop: "40px", marginBottom: "40px", width: "60%", 
      marginLeft: "auto", marginRight: "auto", fontFamily: "body"}}>

      <BlogNav.Previous>
          {(next || previous) && (
            <BlogNav.Link type="button" 
            style={{padding: "5px"}} to={`/news/`}>
              {leftArrow} {'Back'}
            </BlogNav.Link>
          )}
        </BlogNav.Previous>

      <div
        style={{
          display: "block",
          marginTop: "15px",
          marginBottom: "60px",
          border: "2px solid grey",
          borderRadius:"5px",
          paddingLeft: "20px",
          paddingRight: "20px",
          fontFamily:"body",   
          color:"white", 
        }}
      >
        <Title style={{fontFamily:"body", marginTop:"20px", color: "white", fontWeight: "600"}}>{post.frontmatter.title}</Title>
        <div sx={{ fontFamily:"body"}}>
          <MDXRenderer >{post.body}</MDXRenderer>
        </div>
        <span sx={{ fontFamily:"body",fontWeight: "400", fontSize: "1.1em", color: "#f0f0f0", paddingBottom: "20px" }}>
          {post.frontmatter.date}
        </span>
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        description
        slug
        title
      }
      body
    }
  }
`
