
import style from "./style.module.css"
import img1 from "../../image/icons/free-icon-font-instagram-6422200.svg"
import img2 from "../../image/icons/free-icon-font-linkedin-6422202.svg"
import img3 from "../../image/icons/free-icon-font-telegram-6422206.svg"
import useDeviseType from "../../hooks/useDeviceType"
import spooky from "../../image/icons/free-icon-cute-ghost-18118698.png"
import { useState } from "react"
import RightMenu from "../RightMenu/Rightmenu"
const NavIcon = () =>{

    
    //popup
    const [isModal, setModal] = useState(false)

    const handleClick = () => {
        setModal(true)
    }

    const windowSize = useDeviseType()
    if(windowSize<1280){

        return(
            <>
            
            <nav id="menu" className={style.container}>
        
                <li>
                    <a 
                    onClick={handleClick}
                    href="#"><img src={spooky} alt="1" /></a>
                </li>
                <RightMenu isModal={isModal} onClick={()=>setModal(false)}/>
            </nav>
            </>
        )
    }

    return(
        <>
        <nav id="menu" className={style.container}>
    
            <li>
                <a href="#"><img src={img1} alt="1" /></a>
            </li>
            <li>
                <a href="#"><img src={img2} alt="2" /></a>
            </li>
            <li>
                <a href="#"><img src={img3} alt="3" /></a>
            </li>
          
        </nav>
        </>
    )
}

export default NavIcon