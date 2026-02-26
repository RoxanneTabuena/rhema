import { NavLink } from 'react-router-dom'
import style from './footNav.css'
export const FootNav = () => {
    return (
        <div className={style.hello} style={{ display : 'flex', flexDirection: 'column'}}>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/booking">booking</NavLink>
            <NavLink to="/backline rentals">backline rentals</NavLink>
            <NavLink to="/liveSound">liveSound</NavLink>
            <NavLink to="/services">services</NavLink>
            <NavLink to="/ourExperts">ourExperts</NavLink>
            <NavLink to="/contact">contact</NavLink>
            <NavLink to="/joinRhema">joinRhema</NavLink>
            <NavLink to="/booking">booking</NavLink>
        </div>
    )
}