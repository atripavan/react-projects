import React from "react";
import classes from "./Popup.module.css";

const Popup = props => {
  return (
    <div className={classes.popupbox}>
      <div className={classes.box}>
        <span className={classes.closeicon} onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;