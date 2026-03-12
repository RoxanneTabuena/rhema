import { Menu } from "./Menu/Menu"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { MenuIcon } from "./MenuIcon"
import style from './nav.module.css'
export const Nav = () => {
    const [open, setOpen] = useState(false)
    const {pathname} = useLocation()
    // close menu on path change
    useEffect(()=>{
        setOpen(false)
    },[pathname])
    // open and close menu on click
    const handleMenuToggle= () => {
        setOpen(!open)
    }

    const expand = (
        <div className={style.menu}>
            <Menu/>
            <MenuIcon open={true} handleMenuToggle={handleMenuToggle}/>
        </div>
    )
    const contract = (
        <MenuIcon open={false} handleMenuToggle={handleMenuToggle}/>
    )
    return (
        <nav>
            {open === true ? expand : contract} 
        </nav>
    )
}