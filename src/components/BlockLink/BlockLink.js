import { NavLink } from 'react-router-dom'
import style from './blockLink.module.css'
export const BlockLink = ({verb, title, destination}) => {
    const deskCovers = {
        '/liveSound' : {
            img : `https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/truck.png`,
            alt : `Rhema Truck`
            },
        '/backlineRentals' : {
            img : `https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/dw_drums.png`,
            alt : `Drum Kit`
        }
    }
    return (
        <NavLink className={style.blockLink} to={destination}>
            <img className={style.cover} src={deskCovers[destination].img} alt={deskCovers[destination].alt}></img>
            <img className={style.arrow} src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/arrow.png" alt="arrow icon"></img>
            <p className={style.verb}>{verb}</p>
            <h2 className={style.title}>{title}</h2>
        </NavLink>
    )
}