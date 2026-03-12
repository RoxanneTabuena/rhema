import { NavLink } from 'react-router-dom'
import style from './line.module.css'
export const Line = ({title, link}) => {
    return (
        <div className={style.line}>
            <NavLink to={link}>{title}</NavLink>
        </div>
    )
}