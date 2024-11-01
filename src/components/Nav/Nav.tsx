import { useContext, useEffect, useState } from "react"
import {ThemeContex} from "../../App"
import style from "./style.module.css"
import Popup from "../Popup/popup"
const Nav = () =>{

    const current = useContext(ThemeContex)
    const [dark, setDark] = useState("light")
    console.log(current)

    //popup
    const [isModal, setModal] = useState(false)

    const handleClick = ()=>{
        if(current?.value.theme==="light"){
            current.value.setTheme("dark")
            setDark("dark")
        } else{
            current!.value.setTheme("light")
            setDark("light")
        }
    }
    const handleClickPopup = () => {
        setModal(true)
    }
    

    return(
        <>
        <div className={dark == "light" ? style.statelight : style.statedark}>
            <nav className={style.container}>
        
                <a>Home</a>
                <a>Metings</a>
                <a>Jobs</a>
                <a>Loks</a>
                <a onClick={handleClickPopup}>Love</a>
                <button
                className={dark == "light" ? style.statedark : style.statelight}
                onClick={handleClick}
                >
                    {current?.value.theme}
                </button>
                <Popup isModal={isModal} onClick={()=>setModal(false)}/>
            </nav>
        </div>
        </>
    )
}

export default Nav