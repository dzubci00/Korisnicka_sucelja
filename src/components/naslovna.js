/** @jsx jsx */
import { jsx } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import court from "../assets/court.jpg"


const Naslovna = () => {
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
        margin: "0px -8px 20px -8px",
        padding: isLarge ? "30px 0 30px 0" : "40px 0 10px 0",
      }}
    >

      <h1
        style={{
          color: "white",
          fontSize: isLarge ? "35px" : "33px ",
          textAlign: "center",
          fontFamily: "body",
          marginTop:"10px",
        }}
      >
        Welcome to NBA site!
      </h1>
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
         
        
On this site you can find the scores, read the latest news, read about teams and we also offer a shop where you can buy various things from basketball world. With a few clicks you can register for free and get discounts at the shop.

      </p>

    <img style={{
          width: "70%",
         
        }}src={court} alt="court" />

  
    </div>
  )
}

export default Naslovna
