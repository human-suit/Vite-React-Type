import React, { FC, useEffect, useState } from "react";
import style from "./style.module.css"
import { createPortal } from "react-dom";

type Props={
  isModal:Boolean,
  onClick: () => void
}
const Popup: FC<Props> = ({isModal,onClick}) => {
    if(!isModal){
      return null
    } 

    const modalRoot = document.getElementById("modal") as HTMLElement
    
    return createPortal(
      <div className={style.popupBox}>
        <div className={style.box}>
          <span className={style.closeIcon} onClick={onClick}>x</span>
            <div>
              <h1>
                Wow u are here! i love u bro, u strong men <br/>or woman,
                u so beautiful i knoy small <br/>peaple speack about this 
                well but u knoy and good luck and have fun :)
              </h1>
            </div>
        </div>
      </div>,
      //где распологать
      modalRoot
    );
  };
   
  export default Popup;