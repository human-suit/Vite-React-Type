
import { ChangeEvent, FC, useContext, useState } from "react"
import style from "./style.module.css"
import { Bean } from "../../types/types"
import { ThemeContex } from "../../App"
type Props = {
    data: Bean,
}

const Card : FC<Props> = ({data}) =>{
    
    const [like,setLike] = useState(0)

    const current = useContext(ThemeContex)
    
    const handleClikc = (event: React.MouseEvent<HTMLButtonElement> | any)=>{
        setLike(Number(event.target.value) + like)
        current?.value2?.setCount(like)
    }
    return(
        <>
        
        {data.beanId%2===1 &&
            <div className={style.card}>
            <img className={style.left} src={data.imageUrl} alt="/" />
                <div className={style.grid}>
                    <div className={style.content}>
                        <div className={style.name}>
                            <h2>{data.flavorName}</h2>
                            <h3>{data.dopInfo}</h3>
                        </div>
                        <p>{data.info}</p>
                    </div>
                    <div className={style.but}>
                        <button>Find me</button>
                        <button>Let`s Work</button>
                    </div>
                    <p>{data.description}</p>
                </div>
            
            </div>
        } { data.beanId%2===0 &&

            <div className={style.card}>
            
                <div className={style.grid}>
                    <div className={style.content}>
                        <div className={style.name}>
                            <h2>{data.flavorName}</h2>
                            <h3>{data.dopInfo}</h3>
                        </div>
                        <p>{data.info}</p>
                    </div>
                    <div className={style.but}>
                        <button
                        value={+1}
                        onClick={(event) => handleClikc(event)}
                        >Like +1</button>
                        <button
                        value={-1}
                        onClick={(event) => handleClikc(event)}
                        >-1 Like</button>
                    </div>
                    <p>{data.description}</p>
                </div>
                <img className={style.right} src={data.imageUrl} alt="/" />
            </div>

        }
        
        </>
    )
}

export default Card