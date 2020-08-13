import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <nav className='nav-wrapper blue darken-3'>
            <div className='container'>
                <a className='brand-logo'><b>Click The Links For Fun Facts About Fruits</b></a>
                <ul className='yo'>
                    <li><Link to='/Bananas'>Banana Time</Link></li>
                    <li><Link to='/Kiwis'>Kiwi Day</Link></li>
                    <li><Link to='/Oranges'>Orange Power</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar