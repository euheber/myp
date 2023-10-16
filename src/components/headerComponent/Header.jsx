function Header(){
    return (
        <>
            <header className=" px-5">
                <div className="flex justify-between py-2">
                <a href="/" className="uppercase text-1d1e20">myp</a>
                <nav>
                    <ul className="flex gap-5">
                        <li>
                            <a href="/">Cosmópolis</a>
                        </li>
                        <li>
                           <a href="/"> Cadastre-se</a>
                         </li>
                         <li>
                            <a href="/">Blog</a>
                         </li>
                    </ul>
                </nav>
                </div>
                <div className="max-w-lg ml-auto mt-10">
                    <p className="font-lora text-right font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus architecto distinctio culpa consequatur quisquam accusantium beatae voluptate voluptatum, perferendis amet. Consequuntur veniam omnis fugit atque quaerat nemo vitae sint ad.
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header