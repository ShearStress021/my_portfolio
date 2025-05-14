import { AlignLeft, X } from "lucide-react";
import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {

    const [isClicked, setIsClicked] = useState(false)

    const toggleNavClicked = () => {
        setIsClicked(!isClicked)
    }
    return <header className="fixed top-0 z-[500] w-full">
        <div className="container flex items-center justify-between py-4">
            <div className="z-10">
                <a className="font-bold text-white md:text-lg" href="/">Kagimbi <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">Samuel</span></a>
            </div>
            <Navbar isClicked={isClicked} toggleNavClick={toggleNavClicked} />
            <button onClick={toggleNavClicked} className="text-white cursor-pointer z-10 flex items-center md:hidden">
                {
                    isClicked ? <X size={28} /> : <AlignLeft size={28} />
                }
            </button>


        </div>

    </header >
}
export default Header;