import { Current } from '../../../Contact/Booking/Request/Order/Current/Current'
import { NavLink } from 'react-router-dom'
import style from './peek.module.css'
export const Peek = () => {

    return (
        <div className={style.peek} >
            <Current/>
            <NavLink to="/rentalRequest" className={style.checkout}>CheckOut</NavLink>

        </div>
    )
}