function Header(){
    return (
        <>
            <header className="border-b-2 border-b-black bg-blue-green px-5 rounded-t-[10px]">
                <div className="flex justify-between items-center py-2">
                <a href="/" className="uppercase text-1d1e20 text-2xl">my<span className="text-freesia">p</span></a>
                <nav>
                    <ul className="flex gap-5 items-center">
                        <li>
                           <select name="city" id="" className="pr-1 border border-blue-green bg-blue-green outline-0">
                            <option value="cosmopolis" className="font-serrat">Cosmópolis</option>
                            <option value="campinas">Campinas</option>
                           </select>
                        </li>
                         <li>
                           <a href="/" className="hover:text-freesia transition duration-150">Ongs</a>
                         </li>
                         <li>
                            <a href="/" className="hover:text-freesia transition duration-150">Saiba mais</a>
                         </li>
                    </ul>
                </nav>
                </div>
            </header>
        </>
    )
}

export default Header