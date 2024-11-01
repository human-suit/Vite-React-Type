
import { FC, useEffect, useState } from "react"
import style from "./style.module.css"
import { Bean } from "../../types/types"
import allBeans from "../../data/beans.json"
import Card from "../Card/Card"

type Props = {
    value:number,
    setCount:React.Dispatch<React.SetStateAction<number>>
}

const SectionImg = () =>{
    // console.log(value)
    // console.log(setCount)
    const [initialBeans, setInitialBeans] = useState(allBeans)
    
    return(
        <>
        <div id="modal" className={style.container}>
            {initialBeans.items &&
                initialBeans.items.map((bean)=>{
                    return <Card data={bean} key={bean.beanId}/>                })
            }
        </div>
        </>
    )
}

export default SectionImg