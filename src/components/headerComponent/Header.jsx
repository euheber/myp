function Header(){
    return (
        <>
            <header className="border-b-2 border-b-1d1e20 rounded-sm">
                <div className="flex justify-between items-center py-2">
                <a href="/" className="uppercase text-1d1e20 text-2xl">my<span className="text-f2c94d">p</span></a>
                <nav>
                    <ul className="flex gap-5">
                        <li>
                            <a href="/">Cosmópolis</a>
                        </li>
                        <li>
                           <a href="/"> Cadastre-se</a>
                         </li>
                         <li>
                            <a href="/">Saiba mais</a>
                         </li>
                    </ul>
                </nav>
                </div>
            </header>
        </>
    )
}

export default Header