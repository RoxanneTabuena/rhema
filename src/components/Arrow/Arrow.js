import { NavLink } from 'react-router-dom'
import style from './arrow.module.css'
export const Arrow = ({text, path, color}) => {
    return (
        <NavLink to={path} type="arrow" className={style.arrow}>
                { color === 'white' ? 
                    <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/arrow.png" alt="white arrow"></img>:
                    <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/bv_arrow.png" alt="purple arrow"></img> 
                }
                <p style={{color: color === 'white' ? 'blueviolet' : 'white'}}>{text}</p>
        </NavLink>

    )
}