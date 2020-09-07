/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import "../components/image-gallery.css"
import naslovna from "../assets/naslovna.jpg"
import Naslovna from "../components/naslovna"



const IndexPage = ({data}) => {
  const isLarge = useMediaQuery("(min-width: 1000px)")

  return(
  <Layout>

    <SEO title="Home" />
    <div style={{
          backgroundImage: `url(${naslovna})`,
          height: "350px",
          width: "100%",
          overflow: "hidden",
          position:"relative",
          zIndex:"1",
          backgroundSize: "cover",
          backgroundPositionY: "-170px",
          borderBottom: "1px solid grey",
          display: isLarge ? "" : "none",
        }}>
        </div>
    <Naslovna/>
    
  </Layout>
)
        }
export default IndexPage
