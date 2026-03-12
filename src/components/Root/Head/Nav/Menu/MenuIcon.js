import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MenuContext } from '../../../../../context/MenuContext'
import style from './menu.module.css'

export const MenuIcon = () => {
    // connect to menu context
    const [ menuState, menuDispatch] = useContext(MenuContext)
    // get current pathname
    const { pathname } = useLocation()
    // control path
    const [ path, setPath ] = useState(pathname)

    // menu toggle functions
    const close = () => {
        const action = { type:"CLOSE"}
        menuDispatch(action)
    }
    const open = () => {
        const action = {type: "OPEN"}
        menuDispatch(action)
    }

    // close menu on pathchange
    useEffect(()=>{
        console.log('pathchange')
        if(path !== pathname){
            close()
            setPath(pathname)
        }
    },[pathname])

    // icons
    const openIcon = 
        <img src={'https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/Menu_Icon.png'} alt="menu icon"></img>
    const closeIcon = 
        <img src={'https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/Close_Icon.png'} alt="close icon"></img>
    
    return (
        // if menu is open close on click / vice versa
        <div onClick={menuState.open ? ()=>{close()} : ()=>{open()}} className={style.icon} >
            {/* if menu is open show close icon / vice versa */}
            {menuState.open === true ? closeIcon : openIcon}
        </div>
    )
}