/** @jsx jsx */
import { Link } from "gatsby"
import { jsx} from "theme-ui"
import Triangle from "./triangle"

const SideMenu = ({ menuItems }) => {
  
  return (
    <div
      sx={{
        zIndex: "999",
        position: "absolute",
        top: "59px",
        right: "0px",
        display: "flex",
        flexDirection: "column",
        p: 2,
        color:"white",
        backgroundColor: "#1D428A",
        border:"1px solid grey",
        borderRadius:"5px",
      }}
    >
      {menuItems.map(({ link, text, id }) => (
        <Link
          key={id}
          to={link}
          sx={{
            m: 2,
            px: 2,
            py: 2,
            color: "white",
            textDecoration: "none",
            whiteSpace: "nowrap",
            letterSpacing: "wide",
            "&:hover": {
              color: "white",
              borderBottom: "2px solid white",
            },  
          }}
          activeStyle={{
            color: "white",
            borderBottom: "2px solid white"
          }}
        >
          {text}
        </Link>
      ))}
      <Triangle />
    </div>
  )
}
export default SideMenu
