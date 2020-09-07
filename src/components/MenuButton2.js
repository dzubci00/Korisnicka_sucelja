/** @jsx jsx */
import { jsx } from "theme-ui"
import SideMenu2 from "./sidemenu2"
import React from "react"

class MenuButton2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false,
    }
    this.ClickMoreButton = this.ClickMoreButton.bind(this)
  
  }

  ClickMoreButton() {
    if (!this.state.opened) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false)
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false)
    }

    this.setState(prevState => ({
      opened: !prevState.opened,
    }))
  }

  

  render() {
    const { opened } = this.state
    const { menuItems } = this.props
    return (
      <div
        ref={node => {
          this.node = node
        }}
        sx={{
          display: "inline-block",
          position: "relative",
          px: 3,
          ml: 4,
          top:"-34px",
          width: "50px",
          cursor: "pointer",
          outline: "none",
          
          
        }}
        onClick={this.ClickMoreButton}
        onKeyDown={this.ClickMoreButton}
        role="button"
        tabIndex={0}
      >
        <span
          sx={{
            position: "absolute",
            top: "5px",
            padding: 2,
            borderRadius: "5px",
            border:"2px solid grey",
            color: "white",
            
          }}
        >
          MENU{" "}
        </span>
        {opened && <SideMenu2 menuItems={menuItems} />}
      </div>
    )
  }
}

export default MenuButton2
