import { useEffect, useState } from "react";

const navigation = [
    { title: 'home', url: '#home' },
    { title: 'projects', url: '#projects' },
    { title: 'about', url: '#about' },
    { title: 'skills', url: '#skils' },
    { title: 'contact', url: '#contact' },

]


const Navbar = ({ isClicked, toggleNavClick }) => {

    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrolPosition = window.scrollY
            const sections = document.querySelectorAll('section[id]')

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrolPosition >= sectionTop && scrolPosition <= sectionHeight + sectionHeight) {
                        setActiveLink(section.id)
                    }
                }
            })
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return <>
        {/* Mobile Nav */}
        <nav className={`transform fixed left-0 top-0 h-screen w-[190.25rem] flex items-center justify-start transition-all duration-500 ${isClicked ? 'translate-x-0' : '-translate-x-full'
            }`} >
            <ul className="h-full w-[60%] bg-blue-950 pl-4 pt-22">
                {navigation.map(item => (
                    <li key={item.title} className="mb-4 text-lg font-medium capitalize">
                        <a className={`${activeLink === item.title ? "text-purple-950" : "text-white"} hover:text-amber-800 transition-colors duration-300 ease-in`} href={item.url} onClick={() => toggleNavClick()}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav >

        {/* Desktop nav */}
        <nav className="hidden md:inline-flex">
            <ul className="flex gap-10 capitalize">
                {
                    navigation.map(item => (
                        <li key={item.title} className="inline-block">
                            <a className={`relative after:absolute text-xl  after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-[20px]  after:rounded-xl  after:transition-all after:duration-300 after:ease-in hover:after:bg-cyan-600 hover:after:w-full ${activeLink === item.title ? "text-cyan-600" : "text-white"} hover:text-cyan-600 transition-colors duration-300 ease-in`} href={item.url}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </nav >
    </>

}
export default Navbar;