import assets from "../assets/assets"

const Header = ()=>{
    return (
        <div className="fixed w-full top-0 left-0 px-12 py-5 bg-linear-to-b from-zinc-900 z-10">
            <div className="flex justify-between items-center max-w-5xl mx-auto ">
                <div>
                    <a href="/">
                    <img src={assets.logo} alt="logo" className="w-36"  />
                </a>
                </div>

                <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold">Sign In</button>
                
            </div>
        </div>
    )
}

export default Header