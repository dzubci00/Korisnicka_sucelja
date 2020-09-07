/** @jsx jsx */
import { useState} from "react"
import { jsx } from "theme-ui"
import onClickOutside from 'react-onclickoutside';
import { Link } from "gatsby"
import { Icon} from '@iconify/react';
import calendarMonthOutline from '@iconify/icons-mdi/calendar-month-outline';


function DropDown({title, items=[],link, multiSelect=false}){

    const[open,setOpen]=useState(false);
    const[selection,setSelection]=useState([]);
    const toggle=()=> setOpen(!open);
    DropDown.handleClickOutside = () => setOpen(false);

function handleOnClick(item) {
    if(!selection.some(current=> current.id===item.id)){
    if(!multiSelect){
        setSelection([item]);
    }
    else if(multiSelect){

        setSelection([...selection, item]);
    }
} else {
    let selectionAfterRemoval=selection;
    selectionAfterRemoval=selectionAfterRemoval.filter(
        current=>current.id !== item.id
    );
    setSelection([...selectionAfterRemoval]);
    }
}



return(
 <div style={{display: "flex",
     minHeight: "38px",
     flexWrap: "wrap",
     color:"white",
     fontFamily:"body",
     backgroundColor:"black"}}>
    <div style={{display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        width: "100%",
        outline:"none",
        borderBottom:"2px solid grey",
        padding: "0 20px",}}
        tabIndex={0} 
        role="button" 
        onKeyPress={() => toggle(!open)} 
        onClick={()=>toggle(!open )}
        >
        <div sx={{display:"flex", alignItems:"center"}}>
        <Icon icon={calendarMonthOutline} width="20" height="20" />
            <p  style={{fontSize:"25px",marginTop:"10px",marginBottom:"10px", fontWeight: "bold",paddingLeft:"5px"}}>{title}</p>
           
        </div>

    </div>
    {open && (
        
        <ul style={{ boxShadow: "0 .125rem .25rem rgba(0,0,0,.075) !important",
            padding:"0",
            margin: "0",
            width: "100%",
           }}>
            {items.map(item=>(
            <li style={{listStyleType: "none"}} key={item.id}>
                <Link sx={{textDecoration:"none"}} to={item.link}>
                <button sx={{display: "flex",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        fontSize: "16px",
        padding: "15px 20px 15px 20px",
        border:"0",
        borderTop:"1px solid grey",
        width: "100%",
        textAlign: "left",
        borderLeft: "1px solid grey",
        borderRight: "1px solid grey",
        "&:hover": {
            cursor: "pointer",
            fontWeight: "bold",
            
            
          }}} type="button" onClick={()=>handleOnClick(item) }>
            
                <span>{item.value}</span>

                </button>
            </Link>

            </li>
        ))}
        </ul>
    )}
 </div>

);
}

const clickOutsideConfig = {
    handleClickOutside: () => DropDown.handleClickOutside,
  };

export default onClickOutside(DropDown, clickOutsideConfig);