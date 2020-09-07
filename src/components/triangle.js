/** @jsx jsx */
import { jsx} from "theme-ui"

const Triangle = () => (
    <div
      sx={{
        position: "absolute",
        top: "-15px",
        right: "19px",
        width: "27px",
        height: "27px",
        lineHeight: 0,
        fontSize: 0,
        border: "1px solid grey",
        borderWidth: "0 0 1px 1px",
        transform: "rotate(135deg)",
        backgroundColor: "#1D428A",
      }}
    />
  )

  export default Triangle