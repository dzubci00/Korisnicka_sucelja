import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useMediaQuery from "@material-ui/core/useMediaQuery"


const Prijava = () => {
  const isLarge = useMediaQuery("(min-width: 436px)")
  const isLarge2 = useMediaQuery("(min-width: 768px)")
  return (
    <Layout>
      <SEO title="Log in" />
      <div style={{width:isLarge2? "70%":"100%",marginLeft:"auto",marginRight:"auto", marginBottom: "30px",fontFamily:`sans-serif`}}>
        <div style={{
         width:isLarge?"50%":"100%",
         display:isLarge? "inline-block":"block", padding: "20px"
        }}>
          <div style={{borderRadius:"5px", border: "2px solid grey", backgroundColor: "black" }}>
            <p style={{
              fontFamily: `sans-serif`, fontSize: "1.6em", marginLeft: "10px",
              fontWeight: "bold", color: "white", textAlign: "center"
            }}>Log in</p>
            <form>
              <table className="contactTable" style={{color:"white",
                width: "100%", marginRight: "auto",
                marginLeft: "0", fontFamily:`sans-serif`, marginBottom: "50px"
              }} cellPadding="8px">
                <tr style={{ paddingBottom: "20px" }}>
                  <td style={{ textAlign: "right" }}>
                    User name:
            </td>
                  <td>
                    <input type="text" required className="inputContact"></input>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    Password:
            </td>
                  <td>
                    <input type="password" required className="inputContact"></input>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: "center" }}>
                    <button type="submit" style={{ marginTop: "20px" }} className="inputButton">Log in</button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
        <div style={{
          width:isLarge?"50%":"100%",
          display:isLarge? "inline-block":"block", padding: "20px"
        }}>
          <div style={{ borderRadius:"5px",border: "2px solid grey", backgroundColor: "black" }}>
            <p style={{
              fontFamily: `sans-serif`, fontSize: "1.6em", marginLeft: "10px",
              fontWeight: "bold", color: "white", textAlign: "center"
            }}>Sign up</p>
            <form>
              <table className="contactTable" style={{color:"white",
                width: "100%", marginRight: "auto",
                marginLeft: "0", fontFamily: `sans-serif`, marginBottom: "50px"
              }} cellPadding="8px">
                <tr style={{ paddingBottom: "20px" }}>
                  <td style={{ textAlign: "right" }}>
                    User name:
            </td>
                  <td>
                    <input type="text" className="inputContact"></input>
                  </td>
                </tr>
                <tr style={{ paddingBottom: "20px" }}>
                  <td style={{ textAlign: "right" }}>
                    Email:
            </td>
                  <td>
                    <input type="email" required className="inputContact"></input>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "right" }}>
                    Password:
            </td>
                  <td>
                    <input type="password" required className="inputContact"></input>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ textAlign: "center" }}>
                    <button type="submit" style={{ marginTop: "20px" }} className="inputButton">Sign up</button>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Prijava
