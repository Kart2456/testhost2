import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
    

    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shodow-md bg-gray-500 text-white">
            <h3 className="font-bold">GitSearch</h3>

            <span>
                <Link to="/" className="mr-5">Home</Link>
                <Link to="/favourites">Favorites</Link>
            </span>
            
        </nav>
    )
}
