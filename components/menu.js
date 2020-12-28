
export default function Menu(props) {
    const exitPopup = ()=>{
        console.log(props)
        props.onExitPopup(); 
    }
    return (
        <div>
            <div className="absolute top-10 z-20 left-1/2 px-2 pb-2 transform -translate-x-1/2 w-5/6 bg-white rounded-xl">
                <div className="w-full flex flex-wrap justify-center items-center py-6">
                    <a className="py-3 px-6 bg-green-swan hover:bg-opacity-75 text-white text-lg font-semibold shadow-lg rounded-lg focus:outline-none focus:ring focus:ring-green-200 transition-all duration-300" href="/menu.pdf">Download Menu</a>
                </div>
                <iframe src="/combinepdf-min.pdf" width="100%" height="800px" style={{borderRadius:"15px"}}/>
            </div>
            <div onClick={exitPopup} className="w-full z-0 h-full min-h-screen overlay-app absolute top-0 left-0"></div>
        </div>
    )
}