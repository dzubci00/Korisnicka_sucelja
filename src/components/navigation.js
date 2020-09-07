/** @jsx jsx */
import { jsx, Header } from "theme-ui"
import { Link } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import logo from "../assets/logo1.png"
import NavigationLinks from "./NavigationLinks"
import { Icon} from '@iconify/react';
import accountCircle from '@iconify/icons-mdi/account-circle';

/*
menuItems: [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Teams",
    path: "/teams",
  },
  {
    text: "Players",
    path: "/players",
  },
  {
    text: "Results",
    path: "/results",
  },    
  {
    text: "Standnigs",
    path: "/standings",
  },
  
],
*/



const Navigation = ({ menuItems }) => {
  const isLarge = useMediaQuery("(min-width: 729px)")
  return (
    <Header
      sx={{
        justifyContent: "start",
        alignItems: "center",
        backgroundColor:"#1D428A",
        paddingBottom:"5px",
        paddingTop:"5px",
    
      }}
    >
      <Link to="/"  sx={{ display: "flex",justifyContent:"center" }}>
        <img
          alt="logo"
          src={logo}
          sx={{display: isLarge? "none":"",height: "65px",width: "auto", paddingLeft:"2px" }}
        />
      </Link>
      
      <nav sx={{ display: "inline-block" }}>
        <NavigationLinks menuItems={menuItems} />
      </nav>
      <Link to="/prijava"  sx={{"&:hover":{color:"#f0f0f0"},
            top:"100px",color:"white",marginLeft:"96px",marginRight:"50px"}}>
        <div>
          <Icon icon={accountCircle} width="30" height="30" style={{
                    position: "relative",
                    top: "4px"
                    }}/>
        </div>
      </Link>
    </Header>
  )
}

export default Navigation
