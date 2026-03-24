import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Counter } from './Peek/Counter'
import { Peek } from './Peek/Peek'
import { NavLink } from 'react-router-dom'
import { Nav } from './Nav/Menu/Nav'
import style from './head.module.css'
export const Head = ({togPeek}) => {
    const [ cartState, cartDispatch] =  useContext(CartContext)

    return (
        <div className={style.head}>
            <NavLink to="/">
                <h2 className={style.logo}>RHEMA</h2>
            </NavLink>
            <Nav />
            <Counter count={cartState.items.length} tog={togPeek}/>
        </div>
    )
}