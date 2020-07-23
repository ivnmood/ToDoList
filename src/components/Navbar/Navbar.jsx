import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"


const Navbar = () => {

    return (

           <nav className={s.navbarItems}>
               <div className={s.link}>
                   <NavLink  to="/today">Today</NavLink>
               </div>
               <div className={s.link}>
                   <NavLink  to="/tomorrow">Tomorrow</NavLink>
               </div>
               <div className={s.link}>
                   <NavLink  to="/yesterday">Yesterday</NavLink>
               </div>


           </nav>

    )
}

export default Navbar;