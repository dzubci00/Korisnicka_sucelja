/** @jsx jsx */
import { Link } from "gatsby"
import { jsx,} from "theme-ui"

const NavigationLink = ({ children, ...prop }) => {
  

  return (
    <Link
    {...prop}
    sx={{
      display: "inline-block",
      px: 5,
      ml: 4,
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      letterSpacing: "wide",
      lineHeight:`calc(60px - 2 * 3px)`,
      borderTop:`3px solid transparent`,
      borderBottom: `3px solid transparent`,
      transition: "all 0.25s linear",
      "&:hover": {
        color: "white",
        borderBottom: `3px solid white`,
      },
    }}
    activeStyle={{
      color: "white",
      borderBottom: `3px solid white`,
    }}
  >
      {children}
    </Link>
  )
}

export default NavigationLink
