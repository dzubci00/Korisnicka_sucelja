
/** @jsx jsx */
import { jsx } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Link } from "gatsby"

const Rezultat1 = () => {
    const isLarge = useMediaQuery("(min-width: 900px)")

  return (
    <section sx={{display:"flex",
    clear:"both",
    
            
            }}>

            <div sx={{
                        flex: "1",
                        order: "1",
                        padding: "0",
                        overflowX: "hidden",
                        borderLeft:"1px solid grey"
    
                }}>

                <button sx={{cursor:"pointer", display:"none"}}>back</button>  
                <div sx={{display:"flex", alignItems:"center"}}>
                <div sx={{top: "85px",
                        left: "20px",
                        position: "relative",
                        width: "200px",
                        marginTop: "-70px",
                        backgroundRepeat: "no-repeat",
                        height:"300px",
                        backgroundImage:"url(https://www.nba.com/assets/logos/teams/primary/web/TOR.svg)",
                        backgroundSize:"100%",
                        }}>


                </div>
                <div sx={{color:"white", fontFamily:"body", alignItems:"center"}}>
                <p sx={{marginLeft:"200px",marginBottom:"0",fontSize:"35px", fontWeight: "500",}}>Toronto</p>
                <p sx={{marginBottom:"35px",marginLeft:"200px",marginTop:"0", fontSize:"55px", fontWeight:"700"}}>Raptors</p>

                </div>
                </div>


                <div sx={{backgroundColor:"#CE1141", height:"55px", borderBottom:"1px solid grey", borderTop:"1px solid grey"}}>
                </div>
                <p
        style={{
          fontFamily: "body",
          fontSize: isLarge ? "20px" : "18px ",
          textAlign: "justify",
          marginBottom: "25px",
          marginTop: "25px",
          letterSpacing: "1px",
          lineHeight: "1.8",
          width: "90%",
          margin: "auto",
          textAlignLast: "center",
          paddingBottom: "30px",
          color: "white"
        }}
      >
         
         <span sx={{fontWeight:"900", fontSize:"25px"}}>The Toronto Raptors </span>are a Canadian professional basketball team based in Toronto. The Raptors compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Atlantic Division. They play their home games at the Scotiabank Arena, which they share with the Toronto Maple Leafs of the National Hockey League (NHL). The team was founded in 1995 as part of the NBA's expansion into Canada, along with the Vancouver Grizzlies. Since the 2001–02 season, the Raptors have been the only Canadian-based team in the league, as the Grizzlies relocated from Vancouver to Memphis, Tennessee.


      </p>



            </div>
            
            <aside sx={{
                margin: "0",
                overflowX: "hidden",
                overflowY: "hidden",
                width:"320px",
                
                backgroundColor:"#f0f0f0",

                    }}>

                <div>
                    <div sx={{
                            maxHeight: "calc(100vh - 55px)",
                            overflowY: "auto",
                    }}>

                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                        }} 
                                        alt="" class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/BOS.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/teams">Boston Celtics</Link>
                    </div>

                        <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                        }} 
                                        alt="" class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/CHI.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/chicago">Chicago Bulls</Link>
                    </div>
                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                        }} 
                                        alt="" class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/DAL.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/dallas">Dallas Mavericks</Link>
                    </div>
                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                        }} 
                                        alt="" class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/DEN.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/denver">Denver Nuggets</Link>
                    </div>
                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                        }} 
                                        alt="" class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/HOU.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/houston">Houston Rockets</Link>
                    </div>
                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                        }} 
                                        alt="" class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/LAC.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/lac">Los Angeles Clippers</Link>
                    </div>
                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                        }} 
                                        alt="" class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/LAL.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/lal">Los Angeles Lakers</Link>
                    </div>
                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                        }} 
                                        alt="" class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/MIA.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/miami">Miami Heat</Link>
                    </div>
                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                        }} 
                                        alt=""  class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/MIL.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/milwaukee">Milwaukee Bucks</Link>
                    </div>
                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                        }} 
                                        alt=""  class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/OKC.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/okc">Oklahoma City Thunder</Link>
                    </div>
                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                    }} 
                                    alt=""  class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/ORL.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/orlando">Orlando Magic</Link>
                    </div>
                    <div sx={{alignItems:"center", display:"flex",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px",
                    borderBottom: "1px solid grey",}}>
                        <img sx={{    marginRight: "15px",
                                        maxWidth: "40px",
                                        maxHeight: "70px",
                                        width: "100%",
                                        height: "auto",
                                    }} 
                                    alt=""  class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/POR.svg"></img>
                        <Link sx={{color:"black",textDecoration:"none"}} to="/portland">Portland Trail Blazers</Link>
                    </div>
                                    <div sx={{alignItems:"center", display:"flex",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    padding: "10px",
                                    borderBottom: "1px solid grey",}}>
                                        <img sx={{    marginRight: "15px",
                                                        maxWidth: "40px",
                                                        maxHeight: "70px",
                                                        width: "100%",
                                                        height: "auto",
                                                        }} 
                                                        alt=""  class="logo" src="https://www.nba.com/assets/logos/teams/primary/web/TOR.svg"></img>
                                        <Link sx={{color:"black",textDecoration:"none"}} to="/toronto">Toronto Raptors</Link>
                                    </div>
                   
                    
                    </div>
                </div>        
            </aside>
            
      

    </section>
  )
}

export default Rezultat1


