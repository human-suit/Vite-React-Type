import React, { FC, useEffect, useState } from "react";
import style from "./style.module.css"
import { createPortal } from "react-dom";
import img1 from "../../image/icons/free-icon-font-instagram-6422200.svg"
import img2 from "../../image/icons/free-icon-font-linkedin-6422202.svg"
import img3 from "../../image/icons/free-icon-font-telegram-6422206.svg"
type Props={
  isModal:Boolean,
  onClick: () => void
}
const RightMenu: FC<Props> = ({isModal,onClick}) => {
    if(!isModal){
      return null
    } 

    

    const modalRoot = document.getElementById("menu") as HTMLElement
    
    return createPortal(
      <div className={style.popupBox}>
        <div className={style.box}>
          <span className={style.closeIcon} onClick={onClick}></span>
            <div>
              <nav><li><a href="#"><img src={img1} alt="1" /></a></li>
              <li><a href="#"><img src={img2} alt="1" /></a></li>
              <li><a href="#"><img src={img3} alt="1" /></a></li></nav>
            </div>
        </div>
      </div>,
      //где распологать
      modalRoot
    );
  };
   
  export default RightMenu;