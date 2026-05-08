/**
 * COUNTER
 * - located in header
 * - displays cart item count
 * - opens a window on click
 * - window displays full cart content
 */
import { useContext } from 'react'
import style from './peek.module.css'
// get cart state
import { CartContext } from '../../../../context/CartContext'
// get window state
import { WindowContext } from '../../../../context/WindowContext'
// get peek content
import { Peek } from './Peek' 
export const Counter = () => {
    // get cart state
    const [cartState, cartDispatch] = useContext(CartContext)
    // get item count
    const { items } = cartState
    const count = Object.values(items).map((i)=>{return i.qty}).reduce((a,b)=>a+b)
    
    // get window state
    const [windowState, windowDispatch] = useContext(WindowContext)
    // set up show cart action
    const cartPeek = () => {
        const contentAction = {type: "CONTENT", payload: <Peek/>}
        windowDispatch(contentAction)
        const openAction = {type:"OPEN"}
        windowDispatch(openAction)
    }

    return (
        <button className={count > 0 ? style.counter: style.hide} onClick={cartPeek}>
            <p className={style.count}>{count}</p>
            <img className={style.case} src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/roadcase.png" alt="purple road case"></img>
        </button>
    )
}