/** @jsx jsx */
import { Link } from "gatsby"
import { jsx} from "theme-ui"

const SideMenu2 = ({ menuItems }) => {


  return (
    <div
      sx={{
        zIndex: "999",
        position: "absolute",
        top: "56.9px",
        right: "-55px",
        display: "flex",
        flexDirection: "column",
        p: 2,
        backgroundColor: "#1D428A",
        border:"1px solid grey",
        textAlign: "center",
      }}
    >
      {menuItems.map(({ link, text, id }) => (
        <Link
          key={id}
          to={link}
          sx={{
            m: 2,
            mx: 3,
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
            borderBottom: "2px solid white",
          }}
        >
          {text}
        </Link>
      ))}
    </div>
  )
}
export default SideMenu2
