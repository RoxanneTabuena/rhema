import { Arrow } from '../../../Arrow/Arrow'
import { Current } from '../../../Contact/Booking/Request/Order/Current/Current'
import { NavLink } from 'react-router-dom'
import style from './peek.module.css'
export const Peek = ({close}) => {
    const viewCheck = (t) => {
        if(t.className===style.peek){
            close()
        }
    }
    return (
        <div className={style.peek} onClick={(e)=>{viewCheck(e.target)}}>
            <div className={style.window}>
                <button onClick={close}x>x</button>
                <div>
                    <Current/>
                    <NavLink to="/rentalRequest" className={style.checkout}>CheckOut</NavLink>
                </div>
            </div>
        </div>
    )
}