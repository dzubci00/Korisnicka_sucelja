/** @jsx jsx */
import { jsx } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import score from "../assets/nba-score.jpg"


const ScoresHome = () => {
  const isLarge = useMediaQuery("(min-width: 900px)")
  
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width:"100%",
        margin: "0px 0px 20px 0px",
        padding: isLarge ? "30px 0 30px 0" : "40px 0 10px 0",
      }}
    >
      <p
        style={{
          fontFamily: "body",
          fontSize: isLarge ? "20px" : "18px ",
          textAlign: "justify",
          marginBottom: "25px",
          letterSpacing: "1px",
          lineHeight: "1.8",
          width: "70%",
          margin: "auto",
          textAlignLast: "center",
          paddingBottom: "30px",
          color: "white"
        }}
      >
         
        Choose date to view games


      </p>

    <img style={{
          width: "70%",
         
        }}src={score} alt="score" />

    </div>
  )
}

export default ScoresHome
