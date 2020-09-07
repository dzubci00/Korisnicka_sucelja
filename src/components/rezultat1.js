/** @jsx jsx */
import { jsx } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"


const Rezultat1 = () => {
  const isLarge = useMediaQuery("(min-width: 1096px)")


  return (
    <div sx={{
        width:"100%",
        display:isLarge? "flex":"inline-block",
        alignItems:"end",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:"30px",
        
            }}>
            
      
      <div sx={{color:"white",marginLeft:"10px", border:"1px solid grey",borderRadius:"5px", marginTop:"30px", width:"300px"}}>
          <div sx={{borderBottom:"1px solid grey", alignItems:"center", display:"flex", justifyContent:"space-between", borderRadius:"5px"}}>
            <span sx={{fontSize:"80%"}}>Game 3 (BOS leads 2-1)</span>
            <span sx={{fontSize:"70%"}}>East. Conf. Semifinals</span>
          </div>
          <div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
                <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/TOR.svg"
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>Toronto Raptors</span>
                </div>
                <span>104</span>
            </div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
               <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/BOS.svg" 
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>Boston Celtics</span>
                </div>  
                <span>103</span>
            </div>

          </div>
      </div>

      <div sx={{color:"white",marginLeft:"10px", border:"1px solid grey", width:"300px", marginTop:"30px",borderRadius:"5px"}}>
          <div sx={{borderBottom:"1px solid grey", alignItems:"center", display:"flex", justifyContent:"space-between",borderRadius:"5px"}}>
            <span sx={{fontSize:"80%"}}>Game 1 (LAC leads 1-0)</span>
            <span sx={{fontSize:"70%"}}>West. Conf. Semifinals</span>
          </div>
          <div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
                <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/DEN.svg"
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>Denver Nuggets</span>
                </div>
                <span>97</span>
            </div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
            <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/LAC.svg"
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>LA Clippers</span>
                </div>
                <span>120</span>
            </div>

          </div>
      </div>
      
     
      <div sx={{color:"white",marginLeft:"10px", border:"1px solid grey", width:"300px", marginTop:"30px",borderRadius:"5px"}}>
          <div sx={{borderBottom:"1px solid grey", alignItems:"center", display:"flex", justifyContent:"space-between",borderRadius:"5px"}}>
            <span sx={{fontSize:"80%"}}>Game 2 (MIA leads 2-0)</span>
            <span sx={{fontSize:"70%"}}>East. Conf. Semifinals</span>
          </div>
          <div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
            <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/MIA.svg"
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>Miami Heat</span>
                </div>
                <span>116</span>
            </div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
            <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/MIL.svg"
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>Milwaukee Bucks</span>
                </div>
                <span>114</span>
            </div>

          </div>
      </div>
    
      <div sx={{color:"white",marginLeft:"10px",marginRight:"10px", border:"1px solid grey",borderRadius:"5px", width:"300px", marginTop:"30px"}}>
          <div sx={{borderBottom:"1px solid grey", alignItems:"center", display:"flex", justifyContent:"space-between",borderRadius:"5px"}}>
            <span sx={{fontSize:"80%"}}>Game 6 (Series tied 3-3)</span>
            <span sx={{fontSize:"70%"}}>East. Conf. 1.round</span>
          </div>
          <div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
            <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/OKC.svg"
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>Oklahoma City</span>
                </div>
                <span>102</span>
            </div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
            <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/HOU.svg"
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>Houston Rockets</span>
                </div>
                <span>104</span>
            </div>

          </div>
      </div>
     


    </div>
      


  )
}

export default Rezultat1


