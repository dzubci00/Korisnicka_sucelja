/** @jsx jsx */
import { Link } from "gatsby"
import { jsx, useThemeUI } from "theme-ui"

const NavigationLink = ({ children, ...prop }) => {
  const { theme } = useThemeUI()

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
      lineHeight: theme =>
        `calc(${theme.sizes.logo} - 2 * ${theme.sizes.navLinkBorder})`,
      borderTop: theme => `${theme.sizes.navLinkBorder} solid transparent`,
      borderBottom: theme => `${theme.sizes.navLinkBorder} solid transparent`,
      transition: "all 0.25s linear",
      "&:hover": {
        color: "white",
        borderBottom: theme =>
          `${theme.sizes.navLinkBorder} solid white`,
      },
    }}
    activeStyle={{
      color: "white",
      borderBottom: `${theme.sizes.navLinkBorder} solid white`,
    }}
  >
      {children}
    </Link>
  )
}

export default NavigationLink
