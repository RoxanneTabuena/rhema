import { Line } from './Group/Line/Line'
import { siteMap } from '../sitemap'
import { Nav } from './Nav'
import style from './menu.module.css'

export const Menu = () => {

    const translate = ([key, value]) => {
        // extract link and children from object
        const { link, children } = value

        return (
            <div key={key} >
                {/* render title no matter what */}
                <Line title={key} link={link} children={children}/>
                {children &&
                // add group styling when there are children present
                <div className={style.group}>
                    {/* run the translator until an endpoint is found */}
                    {Object.entries(children).map(translate)}
                </div>
                }
            </div>
        )
    }

    return (
        <div className={style.menu}>
            {Object.entries(siteMap).map(translate)}
            <Nav />
        </div>
    )
}