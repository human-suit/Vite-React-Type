import logo_img from "../../image/favicon.png"
import style from "./style.module.css"
const Logo = () =>{
    return(
    <>
        <div className={style.logo}>
            <img src={logo_img} alt="Logo" />
            <a href="/">VADIM</a>
        </div>
    </>
    )
}

export default Logo