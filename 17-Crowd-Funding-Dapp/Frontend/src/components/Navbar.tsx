
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { client } from "../client";
import { tcore2 } from "../chains";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<string>(() => localStorage.getItem("theme") || "light");
    const account = useActiveAccount();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <nav className="bg-slate-100 dark:bg-zinc-900 dark:border-zinc-800 border-b-2 z-0 border-b-slate-300 shadow-md text-gray-900 dark:text-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    
                    {/* Logo and Campaigns Link */}
                    <div className="flex items-end">
  <h1 className="text-3xl font-bold">
    <span className="text-gray-900 dark:text-gray-100">Crowd</span>
    <span className="text-blue-600">Funding</span>
  </h1>
</div>


                    {/* Right Section with Connect Button and Menu Icon */}
                    <div className="flex items-center space-x-4">
                        {/* Links and Connect Button for larger screens */}
                        <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-gray-700 dark:text-gray-200 text-sm font-medium hover:text-purple-600">
                            Campaigns
                        </Link>
                            {account && (
                                <Link to={`/dashboard/${account.address}`} className="text-gray-700 dark:text-gray-200 text-sm font-medium hover:text-purple-600">
                                    Dashboard
                                </Link>
                            )}
                            <button onClick={toggleTheme} className="rounded-md px-3 py-2 text-sm font-medium bg-slate-200 hover:bg-slate-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-100">
                                {theme === "dark" ? (
                                    <span className="flex items-center gap-2">

                                        Light
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">

                                        Dark
                                    </span>
                                )}
                            </button>
                            <ConnectButton 
                                client={client} 
                                theme={lightTheme()} 
                                chains={[tcore2]}
                                detailsButton={{ style: { maxHeight: "50px" } } } 
                            />
                        </div>

                        {/* Hamburger Icon for mobile view */}
                        <button 
                            onClick={toggleMenu} 
                            className="md:hidden text-gray-700 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 pt-2 pb-3">
                            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-zinc-800">
                                Campaigns
                            </Link>
                            {account && (
                                <Link to={`/dashboard/${account.address}`} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-zinc-800">
                                    Dashboard
                                </Link>
                            )}
                         <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-zinc-800">
    <button onClick={toggleTheme} className="w-full text-left mb-2 rounded-md px-3 py-2 text-base font-medium bg-slate-200 hover:bg-slate-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-gray-800 dark:text-gray-100">
      {theme === "dark" ? (
        <span className="inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-400" aria-hidden="true"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm0-20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1ZM4.222 5.636a1 1 0 0 1 1.414 0l.707.707A1 1 0 1 1 5.636 8.05l-.707-.707a1 1 0 0 1 0-1.414Zm12.728 12.728a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414ZM1 13a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2H1Zm20 0a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2h-1ZM4.222 18.364a1 1 0 0 1 0-1.414l.707-.707a1 1 0 1 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414 0ZM16.95 5.636a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 17.657 6.343l-.707-.707Z"/></svg>
          Light
        </span>
      ) : (
        <span className="inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-indigo-600" aria-hidden="true"><path d="M21.752 15.002A9 9 0 0 1 9.002 2.252a9.003 9.003 0 1 0 12.75 12.75Z"/></svg>
          Dark
        </span>
      )}
    </button>
    <ConnectButton 
        client={client} 
        theme={lightTheme()} 
        chains={[tcore2]}
        detailsButton={{ style: { maxHeight: "40px" } }} 
    />
</div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
