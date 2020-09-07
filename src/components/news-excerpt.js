/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import './layout.css'

export default ({ posts }) => {
  const postsList = posts.map(({ post }) => {
    const { id, excerpt } = post
    const { title, date, slug } = post.frontmatter
    return (
      <Link to={`/news/${slug}`}
        style={{
          textDecorationLine: "none",
          marginBottom: "2vh",
          fontFamily: "sans-serif",
        }}>
        <section key={id} sx={{
          mb: 1,
          border: "2px solid grey",
          borderRadius:"5px",
          padding: "20px",
          width: "100%",
        }}>
          <Styled.h3 sx={{ mb: 1, mt: 0 }}>
          <p style={{color: "white", marginBottom:0, marginTop:0, fontWeight: "400"}}>
            {title}
          </p>

          <hr style={{border: "1px solid grey"}}></hr>

          </Styled.h3>
          <Styled.p sx={{ m: 0, color: "#f0f0f0" }}>{excerpt}</Styled.p>
          <p sx={{ fontWeight: "400", fontSize: "1.1em", color: "#f0f0f0", 
          textAlign: "right", width: "100%", mb: 0, mt: 1 }}>
            {date}
          </p>
        </section>
      </Link>
    )
  })

  return postsList
}
