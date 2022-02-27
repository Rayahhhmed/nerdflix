import React from 'react'
import { useState } from 'react';
import "./navbar.scss"
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons'

const SCROLLED_TO_TOP = 0;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Returning that to prevent a loop.
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === SCROLLED_TO_TOP ? true : false);
        return () => (window.scroll = null)
    };

    console.log(isScrolled)

  return (
    <div className = {isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            
            <div className="left">
                    <img src="https://i.imgur.com/Cfh0jiH.png" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and popular</span>
                    <span>My List</span>
            </div>
            
            
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>

                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80" alt="" />

                <div className="profile"> 
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar