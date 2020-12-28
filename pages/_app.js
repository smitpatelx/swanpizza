import '../styles/globals.css'
import '../styles/app.scss'
import headerLinks from '../styles/Header.module.scss'

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <header className="w-full flex flex-wrap justify-center items-center py-6 px-16">
        <div className="flex flex-wrap justify-start items-center w-1/2">
          <img className="h-12 inline-block" src="/logo-black.svg"/>
        </div>
        <div className={`flex flex-wrap justify-end items-center w-1/2 text-xl font-semibold space-x-6 ${headerLinks.headerLinks}`}>
          {/* <a onClick={menuToggle} className="cursor-pointer">Menu</a> */}
          <a href="https://www.instagram.com/redswanpizzawinnipeg/" target="_blank">
            <svg className="w-6 h-6 block text-red-swan" fill="currentColor" viewBox="0 0 38 38"><defs/><path fillRule="evenodd" d="M11.084 4.75a6.333 6.333 0 00-6.334 6.334v15.833a6.333 6.333 0 006.334 6.333h15.833a6.333 6.333 0 006.333-6.333V11.083a6.333 6.333 0 00-6.333-6.333H11.083zm-9.5 6.334a9.5 9.5 0 019.5-9.5h15.833a9.5 9.5 0 019.5 9.5v15.833a9.5 9.5 0 01-9.5 9.5H11.083a9.5 9.5 0 01-9.5-9.5V11.083z" clipRule="evenodd"/><path fillRule="evenodd" d="M19.765 14.233a4.75 4.75 0 10-1.393 9.399 4.75 4.75 0 001.393-9.4zm-4.343-2.329a7.917 7.917 0 117.293 14.055 7.917 7.917 0 01-7.293-14.055z" clipRule="evenodd"/></svg>
          </a>
          <a href="https://www.facebook.com/redswanpizza.mcphillips" target="_blank">
            <svg className="w-6 h-6 block text-red-swan" fill="currentColor" viewBox="0 0 38 38"><defs/><path fillRule="evenodd" d="M17.032 4.366a9.5 9.5 0 016.718-2.782h4.75c.875 0 1.583.708 1.583 1.583V9.5c0 .875-.708 1.584-1.583 1.584h-4.75v3.166h4.75a1.583 1.583 0 011.536 1.968l-1.583 6.333c-.177.705-.81 1.2-1.536 1.2H23.75v11.082c0 .875-.709 1.584-1.583 1.584h-6.334a1.583 1.583 0 01-1.583-1.584V23.75h-3.167A1.583 1.583 0 019.5 22.167v-6.334c0-.874.709-1.583 1.583-1.583h3.167v-3.166a9.5 9.5 0 012.782-6.718zm6.718.384a6.333 6.333 0 00-6.333 6.334v4.75c0 .874-.71 1.583-1.584 1.583h-3.166v3.166h3.166c.875 0 1.584.71 1.584 1.584V33.25h3.166V22.167c0-.875.71-1.584 1.584-1.584h3.513l.792-3.166h-4.305a1.583 1.583 0 01-1.584-1.584v-4.75a3.167 3.167 0 013.167-3.166h3.167V4.75H23.75z" clipRule="evenodd"/></svg>
          </a>
        </div>
        <div></div>
      </header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
