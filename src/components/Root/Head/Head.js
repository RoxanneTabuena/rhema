import { useLocation } from 'react-router-dom'
import { Counter } from './Peek/Counter'
import { NavLink } from 'react-router-dom'
import { Nav } from './Nav/Menu/Nav'
import { Page } from '../../Blocks/Page/Page'
import style from './head.module.css'
export const Head = () => {
    // use location to get title
    const { pathname } = useLocation()
    // split camel case and capitalize string to format title
    let title = pathname.slice(1).split('/').at(-1).split(/(?=[A-Z])/).join(' ').toUpperCase().replaceAll('%20', ' ') 
    title = title === 'ALL' ? pathname.slice(1).split('/').at(-2).split(/(?=[A-Z])/).join(' ').toUpperCase().replaceAll('%20', ' ') : title

    return (
        <div className={style.head}>
            <Page title={title}/>
            <NavLink to="/">
                <h2 className={style.logo}>RHEMA</h2>
            </NavLink>
            <Nav />
            <Counter />
        </div>
    )
}