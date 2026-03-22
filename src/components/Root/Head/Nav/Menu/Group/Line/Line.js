import { NavLink } from 'react-router-dom'
import style from './line.module.css'
export const Line = ({title, link, expand}) => {
    return (
        <div className={expand? style.foot : style.line}>
            <NavLink to={link} >{title}</NavLink>
        </div>
    )
}