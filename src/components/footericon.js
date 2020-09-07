/** @jsx jsx */
import { jsx } from "theme-ui"
import fcb from "../assets/fcb.png"
import ig from "../assets/igg.png"
import yt from "../assets/yt.png"

const slike = [
  {
    src: fcb,
    link: "https://www.facebook.com/nba",
  },
  {
    src: ig,
    link: "https://www.instagram.com/nba/",
  },
  {
    src: yt,
    link: "https://www.youtube.com/user/NBA",
  },
]
const FooterIcon = () => {
  return (
    <div  sx={{
      display: "flex",
      justifyContent: "center",
      marginTop: "20px",
      textAlign: "center",
    }}>
      {slike.map(({ link, src }) => (
        <a key={link} href={link}>
          <img
            alt="slikezafooter"
            src={src}
            sx={{
              height: "3em",
              width: "3em",
              transition: "all .2s ease-in-out",
          "&:hover": {
            transform:"scale(1.1)",
          }, }
            }
          ></img>
        </a>
      ))}
    </div>
  )
}
export default FooterIcon
