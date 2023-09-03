import React from "react"
import "/Users/rkumari/Desktop/Netflix/netflix-clone/src/Navbar/Navbar.css"


function Navbar(props) {
    return (
       <> <nav className='nav'>
            <div className='nav-container'>
                <div className='nav-logo'>
                    <a className="navbar-brand" href="#">Netflix</a>
                </div>
                <ul className='nav-links'>
                    <li><a className="navbar_otheroptions" href="#">Home</a></li>
                    <li><a className="navbar_otheroptions" href="#">TV Shows</a></li>
                    <li><a className="navbar_otheroptions" href="#">Movies</a></li>
                    <li><a className="navbar_otheroptions" href="#">New & Popular</a></li>
                    <li><a className="navbar_otheroptions" href="#">My List</a></li>
                    <li><a className="navbar_otheroptions" href="#">Browse by Languages</a></li>
                </ul>
                <div >
                    <button className='button_nav'>Search</button>
                    <button className='button_nav'>Notifications</button>
                    <button className='button_nav'>Profile</button>
                </div>
            </div>
           <img
        className="navbar__avatar"
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt="User Avatar"
      />
        </nav>
        </>
    
    );
}
export default Navbar;
