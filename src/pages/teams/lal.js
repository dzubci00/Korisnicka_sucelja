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
                        backgroundImage:"url(https://www.nba.com/assets/logos/teams/primary/web/LAL.svg)",
                        backgroundSize:"100%",
                        }}>


                </div>
                <div sx={{color:"white", fontFamily:"sans-serif", alignItems:"center"}}>
                <p sx={{marginLeft:"200px",marginBottom:"0",fontSize:"35px", fontWeight: "500",}}>Los Angeles</p>
                <p sx={{marginBottom:"35px",marginLeft:"200px",marginTop:"0", fontSize:"55px", fontWeight:"700"}}>Lakers</p>

                </div>
                </div>


                <div sx={{backgroundColor:"#552583", height:"55px", borderBottom:"1px solid grey", borderTop:"1px solid grey"}}>
                </div>
                <p
        style={{
          fontFamily: "sans-serif",
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
         
         <span sx={{fontWeight:"900", fontSize:"25px"}}>The Los Angeles Lakers</span> are an American professional basketball team based in Los Angeles. The Lakers compete in the National Basketball Association (NBA) as a member of the league's Western Conference Pacific Division. The Lakers play their home games at Staples Center, an arena shared with the NBA's Los Angeles Clippers, the Los Angeles Sparks of the Women's National Basketball Association, and the Los Angeles Kings of the National Hockey League.[9] The Lakers are one of the most successful teams in the history of the NBA, and have won 16 NBA championships, the second-most behind the Boston Celtics.


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


