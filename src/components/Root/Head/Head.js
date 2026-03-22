import { NavLink } from 'react-router-dom'
import { Nav } from './Nav/Menu/Nav'
import style from './head.module.css'
export const Head = () => {
    return (
        <div className={style.head}>
            <NavLink to="/">
                <h2 className={style.logo}>RHEMA</h2>
            </NavLink>
            <Nav />
        </div>
    )
}