//  a styled cart counter component located in the nav bar that acts as a hyperlink to the cart
import style from './peek.module.css'
// get window state
import { WindowContext } from '../../../../context/WindowContext'
import { useContext } from 'react'
// sneak peek content
import { Peek } from './Peek' 
export const Counter = ({count, tog}) => {
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