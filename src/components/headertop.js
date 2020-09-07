/** @jsx jsx */
import { jsx } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import logo from "../assets/nba-headertop.png"
import "@reach/tabs/styles.css"
import "@reach/dialog"
import "@reach/visually-hidden"
import { Link } from "gatsby"

const Headertop = () => {
  const isLarge = useMediaQuery("(min-width: 729px)")

  
  return (
    <div style={isLarge ? style1 : style2}>
      <div
        style={{
          width: "100%",
          paddingTop:"10px",
          paddingBottom:"10px",
          
          
        }}
      >
         <Link to="/"  sx={{ display: "flex",justifyContent:"center" }}>
      <img
        alt="logo"
        src={logo}
        sx={{

          height: "65px",
          width: "auto",
          
        }}
      />
        </Link>
      </div>  
    </div>
  )
}

export default Headertop

const style1 = {

  flexDirection: "row",
  
}

const style2 = {
  display: "none",
}
