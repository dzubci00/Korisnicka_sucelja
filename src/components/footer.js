/** @jsx jsx */
import { jsx } from "theme-ui"
import FooterIcon from "./footericon"
import useMediaQuery from "@material-ui/core/useMediaQuery"


const Footer = () => {
  const isRowBased = useMediaQuery("(min-width: 700px)")
  return (
    <footer
      style={{
        backgroundColor: "#f0f0f0",
        borderTop:"1px solid grey",
        paddingBottom:"10px",
      width:"100%",
    
      }}
    >
      <div style={isRowBased ? styles1 : styles2}>
        <FooterIcon  sx={{
          display: "flex",
          justifyContent: "center",
        }} />
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0px",
          color: "black",
          textAlign: "center",
        }}
      >
        Ⓒ 2020 NBA site - All rights reserved
        
      </div>
      <div sx={{
          display: "flex",
          justifyContent: "center",
          color: "black",
          textAlign: "center",
        }}>Created by:Domagoj Bradarić and Donat Zubčić</div>
    </footer>
  )
}

export default Footer

const styles1 = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

}

const styles2 = {
  display: "grid",
  justifyItems: "center",
  gridRowGap: "20px",
}
