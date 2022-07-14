import React from 'react'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'

export default function Header() {
    return (
        <header className="">
            <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                {/* Site Title */}
                <Link href="/">
                    <a className="flex font-medium items-center text-gray-900 mb-4 md:mb-0 text-xl">
                        LitTailwind
                    </a>
                </Link>
                {/* Navbar */}
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                    {/* Navbar Links */}
                    <Link href="https://github.com/">
                        <a className="mr-2">Componenets</a>
                    </Link>
                    <Link href="https://github.com/">
                        <a className="flex items-center font-semibold"><i className="ri-github-fill ri-2x mr-1"></i></a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
