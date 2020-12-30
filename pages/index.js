import Head from 'next/head'
import styles from '../styles/home.module.scss'
import { useState } from "react";
import Menu from '../components/menu'

export default function Home() {
  const [toogleVal, setToogleVal] = useState(false);
  const menuToggle = ()=>{
    setToogleVal(!toogleVal)
  }
  const handleToogle = ()=>{
    console.log("ff")
    setToogleVal(false)
  }

  return (
    <div className="w-full flex flex-wrap justify-center items-center" style={{ minHeight: "86vh" }}>
      <Head>
        <title>RedSwanPizza - McPhillips Winnipeg</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="WalkIn special deals for personal 8-inch, small 10-inch and large 14-inch pizza." />
      </Head>
      <div className="w-full flex flex-wrap flex-col content-start justify-start items-center mt-20 pl-5 md:pl-16">
        <h1 className="text-5xl md:text-7xl font-bold text-red-swan w-full">
          Red Swan <span className="text-green-swan">Pizza</span>
        </h1>
        <h2 className="text-xl font-medium text-gray-700 w-full mt-2 flex flex-wrap items-center justify-start">
          <svg className="w-8 h-8 inline-block mr-2" fill="currentColor" viewBox="0 0 50 50"><defs/><path fillRule="evenodd" d="M39.583 12.5H10.417a2.09 2.09 0 01-2.084-2.083 2.09 2.09 0 012.084-2.083h29.166a2.09 2.09 0 012.084 2.083 2.09 2.09 0 01-2.084 2.083zM42 16.25a2.079 2.079 0 00-2.042-1.666H10.042c-1 0-1.854.708-2.042 1.666L6.25 25v2.084a2.09 2.09 0 002.083 2.083v10.416a2.09 2.09 0 002.084 2.084h16.666a2.09 2.09 0 002.084-2.084V29.168H37.5v10.416a2.09 2.09 0 002.083 2.084 2.09 2.09 0 002.084-2.084V29.168a2.09 2.09 0 002.083-2.084V25L42 16.25zM25 37.5H12.5v-8.333H25V37.5z" clipRule="evenodd"/></svg>
          2-2401 McPhillips Street - Winnipeg
        </h2>
        <h2 className="text-lg font-semibold text-gray-500 w-full mt-2 flex flex-wrap items-center justify-start">
          <span className="text-green-swan px-1">Delivery</span> 
          <span className="px-1">&amp;</span> 
          <span className="text-green-swan px-1">Takeout</span> 
          option available !
        </h2>
        <div className="w-full flex flex-wrap items-center justify-start mt-5 space-x-6">
          <a href="tel:+12043066666" className="text-white bg-green-swan hover:bg- rounded-full py-3 pl-6 pr-8 text-lg font-semibold focus:outline-none focus:ring focus:ring-green-400 transition-all duration-300">
            <svg className="w-5 h-5 inline-block mr-1" fill="currentColor" viewBox="0 0 30 30"><defs/><path d="M24.027 19.085l-3.175-.363a2.488 2.488 0 00-2.05.713l-2.3 2.3a18.807 18.807 0 01-8.237-8.237l2.312-2.313c.538-.537.8-1.288.713-2.05l-.363-3.15A2.502 2.502 0 008.44 3.772H6.277c-1.412 0-2.587 1.175-2.5 2.588.663 10.675 9.2 19.2 19.863 19.862 1.412.088 2.587-1.087 2.587-2.5V21.56a2.477 2.477 0 00-2.2-2.475z"/></svg>
            Call Us
          </a>
          <button onClick={menuToggle} type="button" className="text-green-swan bg-transparent rounded-full py-3 px-6 text-lg font-semibold focus:outline-none focus:ring focus:ring-green-400 transition-all duration-300 border-2 border-green-swan">
            Our Menu
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-gray-600 w-full mt-8 flex flex-wrap items-center justify-start leading-none">
          Walk In Deals 
        </h2>
      </div>
      <div className="w-full flex flex-wrap justify-start items-stretch space-y-6 md:space-y-0 md:space-x-10 lg:space-x-14 xl:space-x-24 pt-4 pb-12 pl-12 md:pl-16 pr-12 md:pr-16 lg:pr-0 mt-2">
        <div className={styles.dealCards}>
          <h4>Deal <b>1</b></h4>
          <h1>1 Personal 8"</h1>
          <h3>1 Can of POP</h3>
          <h2>$ 5.99</h2>
        </div>
        <div className={styles.dealCards}>
          <h4>Deal <b>2</b></h4>
          <h1>1 Small 10"</h1>
          <h3>Extra $ for Keto, Cauliflower<br/>and Gluten free crust</h3>
          <h2>$ 8.45</h2>
        </div>
        <div className={styles.dealCards}>
          <h4>Deal <b>3</b></h4>
          <h1>1 Large 14"</h1>
          <h3>2 Toppings</h3>
          <h2>$ 10.95</h2>
        </div>
      </div>
      { toogleVal &&   ( <Menu toogleVal={toogleVal} onExitPopup={handleToogle}></Menu> ) }
      {/* <div className="w-full flex flex-wrap justify-center items-center space-x-14 select-none pb-10">
        <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 focus:ring-4 focus:ring-orange-300 focus:outline-none py-3 px-6 rounded-lg ">
          <Image src="/skip-the-dishes.svg" width="200" height="45"></Image>
        </button>
        <button title="Comming Soon" className="bg-red-700 py-3 px-8 rounded-lg flex flex-wrap items-center justify-center cursor-not-allowed transition-all duration-300 focus:ring-4 focus:ring-red-300 focus:outline-none">
          <svg className="w-12 h-12 text-white inline-block" fill="currentColor" viewBox="0 0 100 57"><defs/><g clipPath="url(#clip0)"><path d="M95.64 13.38A25.24 25.24 0 0073.27 0H2.43A2.44 2.44 0 00.72 4.16l15.43 15.52a7.257 7.257 0 005.15 2.14h49.94a6.44 6.44 0 01.13 12.88H36.94a2.44 2.44 0 00-1.72 4.16l15.44 15.53a7.249 7.249 0 005.15 2.14h15.57c20.26 0 35.58-21.66 24.26-43.16"/></g><defs><clipPath id="clip0"><path d="M0 0h99.5v56.5H0z"/></clipPath></defs></svg>
          <span className="text-white text-2xl font-bold ml-3 uppercase">DoorDash</span>
        </button>
      </div> */}
    </div>
  )
}
