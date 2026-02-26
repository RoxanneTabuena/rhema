import { NavLink } from 'react-router-dom'
import style from './learnMore.module.css'
export const LearnMore = ({to}) => {
    return (
        <NavLink to={to} className={style.absolute}>
            <div className={style.learnMore}>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/bv_arrow.png" alt="purple arrow"></img>
                <p>LEARN MORE</p>
            </div>
        </NavLink>
    )
}