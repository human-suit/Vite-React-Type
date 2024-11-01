export type Bean = {
    beanId: number
    flavorName: string
    dopInfo: string
    description: string
    imageUrl: string
    info:string
    value?: number
    setCount?:React.Dispatch<React.SetStateAction<number>>
}
