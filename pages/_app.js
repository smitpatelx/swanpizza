import '../styles/globals.css'
import '../styles/app.scss'
import { useState } from "react";
import headerLinks from '../styles/Header.module.scss'
import Menu from '../components/menu'


function MyApp({ Component, pageProps }) {
  const [toogleVal, setToogleVal] = useState(false);
  const menuToggle = ()=>{
    setToogleVal(!toogleVal)
  }
  const handleToogle = ()=>{
    console.log("ff")
    setToogleVal(false)
  }

  let ShowMenu = (props) => {
    const toogleVal = props.toogleVal;
    if(toogleVal){
      return <Menu></Menu>
    } else {
      return <div className="hidden"></div>
    }
  }

  return (
    <div>
      <header className="w-full flex flex-wrap justify-center items-center py-3 px-16 bg-green-swan">
        <div className="flex flex-wrap justify-start items-center w-1/3">
          <img className="h-16 inline-block" src="/logo_white.svg"/>
        </div>
        <div className="flex flex-wrap justify-center items-center w-1/3">
          <h2 className="text-2xl text-white font-bold">Winnipeg - McPhillips</h2>
        </div>
        <div className={`flex flex-wrap justify-end items-center w-1/3 text-xl font-semibold space-x-6 ${headerLinks.headerLinks}`}>
          <a onClick={menuToggle} className="cursor-pointer">Menu</a>
          <a href="https://redswanpizza.ca/">Official Site</a>
        </div>
        <div></div>
      </header>
      <Component {...pageProps} />
      {toogleVal && 
        (
          <Menu toogleVal={toogleVal} onExitPopup={handleToogle}></Menu>
        )
      }
    </div>
  )
}

export default MyApp
