import { Group } from './Group/Group'
import { siteMap } from '../sitemap'
import { Nav } from './Nav'
import style from './menu.module.css'

export const Menu = () => {

    return (
        <div className={style.menu}>
            {Object.entries(siteMap).map(Group)}
            <Nav />
        </div>
    )
}