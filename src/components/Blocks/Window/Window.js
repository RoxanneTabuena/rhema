

import style from './window.module.css'
export const Window = ({content}) => {
    return (
        <div className={style.windowCont}>
            <div className={style.window}>
                <button onClick={'CLOSE WINDOW'}x>x</button>
                <div>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}