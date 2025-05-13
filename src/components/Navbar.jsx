const navigation = [
    { title: 'home', url: '#home' },
    { title: 'projects', url: '#projects' },
    { title: 'about', url: '#about' },
    { title: 'skills', url: '#skils' },
    { title: 'contact', url: '#contact' },

]


const Navbar = (isClicked, toggleNavClicked) => {
    return <>
        {/* Mobile Nabv */}
        <nav className={`transform ${isClicked ? 'translate-x-0' : '-translate-x-full'} fixed left-0 top-0 h-screen w-full flex items-center justify-start transition-all duration-500`} >
            <ul className="h-full w-[60%] bg-gray-900 pl-4 pt-22">
                {navigation.map(item => (
                    <li key={item.title} className="mb-4 text-lg font-medium capitalize">
                        <a className="text-white hover:text-lime-600 transition-colors duration-300 ease-in" href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav >
    </>

}
export default Navbar;