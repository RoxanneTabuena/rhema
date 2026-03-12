import { MenuIcon } from './Nav/Menu/MenuIcon'
import style from './head.module.css'
export const Head = () => {
    return (
        <div className={style.head}>
            <h2 className={style.logo}>RHEMA </h2>
            <MenuIcon/>
        </div>
    )
}