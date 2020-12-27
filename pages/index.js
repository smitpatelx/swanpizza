import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full flex flex-wrap relative justify-center items-center" style={{ minHeight: "87vh" }}>
      <div className="w-full flex flex-wrap justify-center items-center mt-6">
        <h1 className="text-7xl font-bold text-white text-opacity-0 bg-gradient-to-r from-red-500 to-green-600 bg-clip-text">Walk In Deals</h1>
      </div>
      <div className="w-full flex flex-wrap justify-center items-stretch space-x-24 pt-4 pb-16">
        <div className={styles.dealCards}>
          <h4>Deal #1</h4>
          <h1>1 Personal 8"</h1>
          <h3>1 Can of POP</h3>
          <h2>$ 5.99</h2>
        </div>
        <div className={styles.dealCards}>
          <h4>Deal #2</h4>
          <h1>1 Small 10"</h1>
          <h3>Extra $ for Keto, Cauliflower<br/>and Gluten free crust</h3>
          <h2>$ 8.45</h2>
        </div>
        <div className={styles.dealCards}>
          <h4>Deal #3</h4>
          <h1>1 Large 14"</h1>
          <h3>2 Toppings</h3>
          <h2>$ 10.95</h2>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center space-x-14 select-none pb-10">
        <a href="tel:+12043066666" className="flex flex-wrap justify-center items-center bg-red-700 hover:bg-red-900 text-white text-lg font-semibold py-5 px-8 rounded-lg transition-all duration-300 focus:ring-4 focus:ring-green-400 focus:outline-none">
          <svg className="text-white stroke-current w-5 h-5 inline-block mr-2" viewBox="0 0 24 24"><g className="phone"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" fill="transparent" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.502 19.502 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" className="Vector"/></g></svg>
          Call us for pickup or delivery
        </a>
        {/* <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 focus:ring-4 focus:ring-orange-300 focus:outline-none py-3 px-6 rounded-lg ">
          <Image src="/skip-the-dishes.svg" width="200" height="45"></Image>
        </button> */}
        {/* <button title="Comming Soon" className="bg-red-700 py-3 px-8 rounded-lg flex flex-wrap items-center justify-center cursor-not-allowed transition-all duration-300 focus:ring-4 focus:ring-red-300 focus:outline-none">
          <svg className="w-12 h-12 text-white inline-block" fill="currentColor" viewBox="0 0 100 57"><defs/><g clipPath="url(#clip0)"><path d="M95.64 13.38A25.24 25.24 0 0073.27 0H2.43A2.44 2.44 0 00.72 4.16l15.43 15.52a7.257 7.257 0 005.15 2.14h49.94a6.44 6.44 0 01.13 12.88H36.94a2.44 2.44 0 00-1.72 4.16l15.44 15.53a7.249 7.249 0 005.15 2.14h15.57c20.26 0 35.58-21.66 24.26-43.16"/></g><defs><clipPath id="clip0"><path d="M0 0h99.5v56.5H0z"/></clipPath></defs></svg>
          <span className="text-white text-2xl font-bold ml-3 uppercase">DoorDash</span>
        </button> */}
      </div>
    </div>
  )
}
