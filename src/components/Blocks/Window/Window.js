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
    }
    return (
        <div className={style.windowCont}>
            <div className={style.window}>
                <button onClick={closeWindow}x>x</button>
                {content}
            </div>
        </div>
    )
}