import { NavLink } from 'react-router-dom'
import style from './events.module.css'
export const Events = () => {
    return (
    <div className={style.events}>
        <h3>Events</h3>
        <div className={style.content}>
            <p className={style.main}>main information for the page</p>
        </div>
    </div>)
} 