import { Outlet, useLocation } from "react-router-dom"
import style from "./root.module.css"
import { Home } from "../Home/Home"
import { Foot } from './Foot/Foot'
import { Head } from "./Head/Head"
export const Root = () => {
    const path = useLocation().pathname
    const reg = (
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
    )
    return (<div>
        {path === '/' ? <Home/> : reg}
    </div>)
}