import React, { Component } from 'react'
const Navbar = () => {
    return (
        <nav className='navigation'>
            <div className="container">
                <a href="navbar-brand"><h2>Odiagbesamson</h2></a>
                <ul className='social-links'>
                    <li><a href="https://github.com/sammyodiagbe"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://facebook.com/odiagbesamson"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/odiagbesamson"><i className='fa fa-twitter'></i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

// i am starting the development server
// it is gonna take a while so let me pause this video