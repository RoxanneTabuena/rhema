import { useContext } from 'react'
import { WindowContext } from '../../../context/WindowContext'

import style from './window.module.css'
export const Window = ({content}) => {
    // get window state
    const [windowState, windowDispatch] = useContext(WindowContext)
    // package close action
    const closeWindow = () => {
        const action = { type: 'CLOSE'}
        windowDispatch(action)
        console.log(windowState.windowOpen)
    }
    return (
        <div className={style.windowCont}>
            <div className={style.window}>
                <button onClick={closeWindow}x>x</button>
                <div>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}