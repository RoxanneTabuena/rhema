import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { useLocation } from 'react-router-dom'
import { Counter } from './Peek/Counter'
import { Peek } from './Peek/Peek'
import { NavLink } from 'react-router-dom'
import { Nav } from './Nav/Menu/Nav'
import { Page } from '../../Blocks/Page/Page'
import style from './head.module.css'
export const Head = ({togPeek}) => {
    // get cart content
    const [ cartState, cartDispatch] =  useContext(CartContext)
    // use location to get title
    const { pathname } = useLocation()
    // split camel case and capitalize string to format title
    const title = pathname.slice(1).split('/').at(-1).split(/(?=[A-Z])/).join(' ').toUpperCase().replace('%20', ' ')
    return (
        <div className={style.head}>
            <Page title={title}/>
            <NavLink to="/">
                <h2 className={style.logo}>RHEMA</h2>
            </NavLink>
            <Nav />
            <Counter count={cartState.items.length} tog={togPeek}/>
        </div>
    )
}