/** @jsx jsx */
import { jsx } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"


const Rezultat2 = () => {
  const isLarge=  useMediaQuery("(min-width: 585px)")

  return (
    <div sx={{
        width:"100%",
        display: isLarge? "flex":"inline-block",
        alignItems:"end",
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:"30px",
        
            }}>
            
    
      <div sx={{color:"white",marginLeft:"10px", border:"1px solid grey",borderRadius:"5px", marginTop:"30px", width:"300px"}}>
          <div sx={{borderBottom:"1px solid grey", alignItems:"center", display:"flex", justifyContent:"space-between", borderRadius:"5px"}}>
            <span sx={{fontSize:"80%"}}>Game 4 (LAL leads 3-1)</span>
            <span sx={{fontSize:"70%"}}>West. Conf. Semifinals</span>
          </div>
          <div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
                <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/LAL.svg"
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>Los Angeles Lakers</span>
                </div>
                <span>135</span>
            </div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
               <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/POR.svg" 
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>Portland Trail Blazers</span>
                </div>  
                <span>115</span>
            </div>

          </div>
      </div>

      
      <div sx={{color:"white",marginLeft:"10px",marginRight:"10px", border:"1px solid grey", width:"300px", marginTop:"30px",borderRadius:"5px"}}>
          <div sx={{borderBottom:"1px solid grey", alignItems:"center", display:"flex", justifyContent:"space-between",borderRadius:"5px"}}>
            <span sx={{fontSize:"80%"}}>Game 4 (MIL leads 3-1)</span>
            <span sx={{fontSize:"70%"}}>East. Conf. Semifinals</span>
          </div>
          <div>
            <div sx={{alignItems:"center", display:"flex", justifyContent:"space-between"}}>
            <div sx={{alignItems:"center", display:"flex"}}>
            <img
            alt="slikezafooter"
            src="https://www.nba.com/assets/logos/teams/secondary/web/ORL.svg"
            sx={{
              height: "3em",
              width: "3em"}
            }
          ></img>
                <span>Orlando Magic</span>
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
                <span>127</span>
            </div>

          </div>
      </div>
      

    </div>
  )
}

export default Rezultat2


