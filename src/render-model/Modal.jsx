import React, { CSSProperties, MouseEventHandler, ReactElement } from "react";
import classes from "./index.module.css";


const Modal = ({
  body,
  onClose,
  closeBtn = true,
  backgroundstyle,
  modalstyle,
}) => {
  return (
    <div className={classes.background} style={backgroundstyle}>
      <div className={classes.modal} style={modalstyle}>
        {closeBtn && (
          <button className={classes["close-btn-user"]} onClick={onClose}>
            <i className="ri-close-line ri-xl"></i> 
          </button>
        )}
        <>{body}</>
      </div>
    </div>
  );
};

export default Modal;
