
import style from "./style.module.css"
import img1 from "../../image/7.jpg"
import img2 from "../../image/4.jpg"
import img3 from "../../image/5.jpg"

const NavImg = () =>{
    return(
        <>
        <nav className={style.container}>
    
            <li>
                <img src={img1} alt="1"/>
            </li>
            <li>
                <img src={img2} alt="2"/>   
            </li>
            <li>
                <img src={img3} alt="3"/>
            </li>
          
        </nav>
        </>
    )
}

export default NavImg