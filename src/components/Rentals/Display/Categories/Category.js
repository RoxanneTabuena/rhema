import { NavLink } from 'react-router-dom'
import style from './category.module.css'
export const Category = ({title}) => {
    return (
        <NavLink to={`/rentals/${title}`} className={style.category}>
            <h3>{title}</h3>
        </NavLink>
    )
}
