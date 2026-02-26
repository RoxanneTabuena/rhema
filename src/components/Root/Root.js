import { Outlet, useLocation } from "react-router-dom"
import style from "./root.module.css"
import { Home } from "../Home/Home"
import { Nav } from "./Nav/Nav"
import { Foot } from './Foot/Foot'
export const Root = () => {
    const path = useLocation().pathname
    const reg = (
        <div className={style.body}>
            <header>
                <h2 className={style.logo}>RHEMA </h2>
                <Nav path={path}/>
            </header>
            <main>
                <Outlet />  
            </main>
            <footer>
                <Foot />
            </footer>
        </div>
    )
    return (<div>
        {path === '/' ? <Home/> : reg}
    </div>)
}