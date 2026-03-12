import { useLocation } from 'react-router-dom'
import { Display } from './Display/Display'
import { Dates } from './Dates/Dates'
import { Relative } from './relative/Relative'
import style from './inventory.module.css'
export const Inventory = () => {
    const {pathname} = useLocation()
    return (
    <div className={style.inventory}>
        <h1 className = {style.logo}>Inventory</h1>
        <div className={style.content}>
            <p className={style.main}>main information for the page</p>
            <Dates/>
            <Relative/>
            <Display key={pathname}/>
        </div>
    </div>)
} 