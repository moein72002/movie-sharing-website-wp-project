import { AccountCircle, ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import './navbar.scss'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
    }

    return (
        <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
            <div className='container'>
                <div className='navbar-left'>
                    <img src="https://freesvg.org/img/Old-Fashioned-Film-Camera-Icon.png"/>
                    <a href="">Homepage</a>
                    <a href="">Movies</a>
                    <a href="">Series</a>
                    <a href="">New&Popular</a>
                    <a href="">My List</a>
                </div>
                <div className='navbar-right'>
                    <Search className='icon'></Search>
                    <Notifications className='icon'></Notifications>
                    <AccountCircle className='icon'></AccountCircle>

                    <div className="profile">
                        <ArrowDropDown className='icon'></ArrowDropDown>
                        <div className="options">
                            <a href="">Setting</a>
                            <a href="">Logout</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar