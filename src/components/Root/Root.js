import { useState, useEffect, useContext} from 'react'
import { Outlet, useLocation } from "react-router-dom"
import style from "./root.module.css"
import { Home } from "../Home/Home"
import { Foot } from './Foot/Foot'
import { Head } from "./Head/Head"
import { Menu } from './Head/Nav/Menu/Menu'
import { MenuContext } from '../../context/MenuContext'
export const Root = () => {
    // control display state
    const [display, setDisplay] = useState('reg')
    // get menu context
    const [menuState, menuDispatch] = useContext(MenuContext)
    const menuOpen = menuState.open
    // get pathname
    const {pathname} = useLocation()

    // root display options
    const displays = {
        'reg' : (
            <div className={style.body}>
                <header>
                    <Head />
                </header>
                <main>
                    <Outlet />  
                </main>
                <footer>
                    <Foot />
                </footer>
            </div>
        ),
        'menu' : <Menu/>,
        'home' : <Home />
    }

    useEffect(()=>{
        // display only menu if menu is open
        // display homepage format at landing
        // default to regular format
        setDisplay(
            menuOpen? 'menu' :
            pathname === '/' ? 'home' : 'reg'
        )
    }, [menuOpen, pathname])

    return (
        <div>
            {displays[display]}
        </div>
    )
}