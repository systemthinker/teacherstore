import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div>
           
      
            <header>
                <Link to="/" >
                    <button>Home</button>
                </Link>
                <p>dit is de header</p>
                <Link to="/cart" >
                    <button>Cart</button>
                </Link>
                

            </header>
            
           
        </div>
    )
}
