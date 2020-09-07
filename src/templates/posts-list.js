/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import BlogExcerpt from "../components/news-excerpt"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import BlogNav, {leftArrow , rightArrow } from "../components/news-navigation"
import SearchIcon from "../components/searchicon"

const BlogList = ({
  pageContext,
  data: {
    allMdx: { posts },
  },
}) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const previousPage =
    currentPage - 1 === 1 ? "/news/" : `/news/${(currentPage - 1).toString()}`
  const nextPage = `/news/${(currentPage + 1).toString()}`
  const emptyQuery = ""
  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })
  const handleInputChange = event => {
    console.log(event.target.value)
    const query = event.target.value
    const allposts = posts || []
    // this is how we get all of our posts
    // return all filtered posts
    const filteredData = allposts.filter(({ post }) => {
      // destructure data from post frontmatter
      const { title, date } = post.frontmatter
      const { excerpt } = post
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        excerpt.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        date.toLowerCase().includes(query.toLowerCase())
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts1 = hasSearchResults ? filteredData : posts
  const isLarge = useMediaQuery("(min-width: 700px)")


  return (
    <Layout>
      <SEO title="News" />
      
      <div style={{ width: "70%", margin: "auto" }}>

        <div
          style={{
            position: "relative",
            marginBottom: "10px",
            fontFamily: "sans-serif",
            resize:"block",
            
          }}
        >
          <input
            type="text"
            aria-label="Search"
            placeholder="Search..."
            onChange={handleInputChange}
            className="inputContact"
            sx={{
              fontFamily:"sans-serif",
              marginTop: "25px",
              marginBottom: "15px",
              py: 2,
              paddingLeft: "40px",
              marginLeft:isLarge? "40%":"0px",
              width:isLarge ? "20%" : "100%", 
              overflow: "hidden",
              border:"2px solid grey",
              borderRadius:"5px",
              fontSize: 1,
              fontWeight: "medium",
              color:"black",
              
            }}
          />
          <div style={{ position: "absolute", left:isLarge? "41%":"13px", top: "48px" }}>
            <SearchIcon
              sx={{
                width: 5,
                height: 5,
                pointerEvents: "none",
                transform: "translateY(-70%)",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "auto auto auto",
            gridColumnGap: "10px",
            justifyItems: "center",
            fontFamily:"sans-serif",
          }}
        >
          <BlogExcerpt posts={posts1} />
        </div>
       
        <BlogNav style={{width: "100%", }}>
          <BlogNav.Previous style={{display:isFirst?"none":""}}>
            {!isFirst && (
              <BlogNav.Link type="button" className="inputButton" style={{ marginBottom: "25px"}} to={previousPage}>{leftArrow}Previous page</BlogNav.Link>
            )}
              {isFirst && (
              <BlogNav.Link type="button" className="inputButton" style={{ marginBottom: "25px"}} readonly to={previousPage}>{leftArrow}Previous page</BlogNav.Link>
            )}
          </BlogNav.Previous>

          <BlogNav.Next>
            {!isLast && (
              <BlogNav.Link type="button" className="inputButton" style={{float: "right", marginBottom: "25px"}} to={nextPage}>Next page{rightArrow}</BlogNav.Link>
            )}
          </BlogNav.Next>
        </BlogNav>
      </div>

    </Layout>
  )
}

export default BlogList

export const query = graphql`
  query BlogList($skip: Int, $limit: Int) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//content/blog//" }
        frontmatter: { published: { eq: true } }
      }
      limit: $limit
      skip: $skip
    ) {
      posts: edges {
        post: node {
          id
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
