import { useState, useEffect, useContext} from 'react'
import { Outlet, useLocation } from "react-router-dom"
import style from "./root.module.css"
import { Home } from "../Home/Home"
import { Peek } from './Head/Peek/Peek'
import { Foot } from './Foot/Foot'
import { Head } from "./Head/Head"
import { Menu } from './Head/Nav/Menu/Menu'
import { MenuContext } from '../../context/MenuContext'
import { WindowContext } from '../../context/WindowContext'
import { Window } from '../Blocks/Window/Window'

export const Root = () => {
    // control display state
    const [display, setDisplay] = useState('reg')
    // get menu context
    const [menuState, menuDispatch] = useContext(MenuContext)
    // control rental preview
    const [ peek, setPeek ] = useState(false)
    const menuOpen = menuState.open
    // get pathname
    const {pathname} = useLocation()
    // get window context
    const [windowState, windowDispatch] = useContext(WindowContext)
    const { windowOpen, windowContent } = windowState

    // root display options
    const displays = {
        'reg' : (
            <div className={style.body}>
                <header>
                    <Head togPeek={()=>setPeek(!peek)}/>
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
            {windowOpen && <Window content={windowContent}/>}
            {peek && <Peek close={()=>setPeek(false)}/>}
            {displays[display]}
        </div>
    )
}