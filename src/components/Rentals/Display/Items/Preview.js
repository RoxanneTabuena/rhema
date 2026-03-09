import { NavLink } from 'react-router-dom'
import style from './items.module.css'
export const Preview = ({title}) => {
    return (
        <NavLink to={`:${title}`} className={style.preview}>
            {title}
            {/* {product title, picture, availability, quick add} */}
            {/* click for full product page */}
        </NavLink>
    )
}