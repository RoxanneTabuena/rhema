import { Group } from './Group/Group'
import { siteMap } from '../sitemap'
import { Nav } from './Nav'
import style from './menu.module.css'

export const Menu = ({expand}) => {

    return (
        <div className={style.menu}>
            {Object.entries(siteMap).map(([k,v])=>{
                return <Group key={k} entry={[k,v]} expand={expand}/>
            })}
            { !expand && 
            <Nav />
            }
        </div>
    )
}