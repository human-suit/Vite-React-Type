import { createContext, useState } from 'react'
import './App.css'
import Header from "./components/Header"
import useOnlineState from './hooks/useOnlineState'
import useDeviseType from './hooks/useDeviceType'
import SectionImg from './components/sectionsImg'
import NavImg from './components/NavImg/Nav'

//для передачи данных между компонентами
type ContextType ={
  value:{
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
  },
  value2?:{
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  }
}

enum DeviceType {
  MOBILE = "MOBILE",
  TABLE = "TABLE",
  DESKTOP = "DESKTOP"
}

//для передачи данных между компонентами
export const ThemeContex = createContext<ContextType | null >(null)

function App() {
  const [count, setCount] = useState(0)
  // const [filterValue, setFilterValue] = useState("")

  //для передачи данных между компонентами
  const [theme, setTheme] = useState("light")

  //Использование своих хуков созданных в папке hooks
  const status = useOnlineState()
  console.log(status)
  const windowSize = useDeviseType()
  console.log(windowSize)

  

  return (
    <>
      
        {/* //для передачи данных между компонентами */}
        <ThemeContex.Provider value={{value:{theme,setTheme}, value2:{count,setCount}}}>
          <div className={`container ${theme}`}>
            <Header/>
            <h2 className='count'>{count}</h2>
            <SectionImg/>
            <NavImg/>
            
          </div>
        </ThemeContex.Provider>
          
    </>
  )
}

export default App
