/** @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import "typeface-ibm-plex-sans"
import { Global } from "@emotion/core"
import {
  css,
  jsx,
} from "theme-ui"
import Headertop from "./headertop"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import React from "react"


const Layout = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuItems {
            text
            link
            id
          }
        }
      }
    }
  `)
const {menuItems}=data.site.siteMetadata
return(
    <>
    
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
            WebkitFontSmoothing: `antialiased`,
            MozOsxFontSmoothing: `grayscale`,
            color: `text`,
            backgroundColor: `#f0f0f0`,
            fontFamily: `body`,
            lineHeight: `body`,
            fontWeight: `body`,
          },
        })}
      />
      <div style={{backgroundColor: "black"}}>
        <div style={{backgroundColor:"#f0f0f0"}}>
          <Headertop/>
        </div>
        <div style={{borderTop:"1px solid grey", borderBottom:"1px solid grey"}}>
          <Navigation menuItems={menuItems} />
        </div>
          {props.children}
          
          <Footer/>
     </div>
      
    </>
  )
}

export default Layout
