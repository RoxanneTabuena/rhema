import { Current } from '../../../Contact/Booking/Request/Order/Current/Current'
import style from './peek.module.css'
export const Peek = ({close}) => {
    return (
        <div className={style.peek}>
            <button onClick={close}x>x</button>
            <Current/>
        </div>
    )
}