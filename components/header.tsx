import React from "react";

const Header : React.FC = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-blue-600 text-white" >
            <h1 className= "font-bold text-2xl">My Next JS App</h1>
            <nav>
            <a href="/" className="mr-4 hover:text-gray-200">Home</a>
            <a href="/About" className="hover:text-gray-200">About</a>
            </nav>
        </header>
    );
};

export default Header;