/** @jsx jsx */
import { jsx } from "theme-ui"
import SideMenu from "./sidemenu"
import React from "react"
import { Icon} from '@iconify/react';
import menuIcon from '@iconify/icons-mdi/menu';


class MoreButton extends React.Component {
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

    const disp1 = "no"
    const { disp, menuItems } = this.props
    return disp1 === disp ? (
      <div
        ref={node => {
          this.node = node
        }}
        sx={{
          justifyContent:"end",
          display: "inline-block",
          position: "relative",
          outline: "none",
          px: 3,
          ml: 4,
          top: "10px",
          cursor: "pointer",
          
          
        }}
        onClick={this.ClickMoreButton}
        onKeyDown={this.ClickMoreButton}
        role="button"
        tabIndex={0}
        
      >
       <Icon icon={menuIcon} color="white" width="30px" height="30px" />
        {opened && <SideMenu menuItems={menuItems} />}
      </div>
    ) : (
      <div
        sx={{
          display: "none",
        }}
      >
        <Icon icon={menuIcon} color="white" width="30px" height="30px" />
      </div>
    )
  }
}

export default MoreButton
