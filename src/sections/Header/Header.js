


import './Header.css'

import {Link} from 'react-router-dom'


import NavItem , {NavItemDropDown} from '../../components/NavItem/NavItem'

import logo from '../../assets/images/logo-no-background.png'
export const Header = () => {
  return (
    
<div className="navbar navbar-expand-md  navbar-dark text-white fixed-top">
        <div className="container">
            <a href="#c" className="navbar-brand">
                
                <img src={logo} alt=""  width="100px"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                        <Link  className="nav-link" to ="/">Home</Link>
                        </NavItem>

                    {/* <NavItemDropDown>
                    <a href="#c" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">FAQS</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="#next" className="dropdown-item">Where to go next</a></li>
                        </ul>
                    </NavItemDropDown> */}
                    <NavItem>
                    <Link  className="nav-link" to ="/contact">Contact</Link>

                        </NavItem>

        
                </ul>
            </div>
        </div>
    </div>


  )
}
 

export default Header