import { FootNav } from "./FootNav/FootNav"
import style from "./foot.module.css"
export const Foot = () => {
    const title = (
        <div className={style.title}>
            <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/Rhema_logo_3d.png" alt="rhema logo">
            </img>
            <h3>Rhema Services</h3>
        </div>
    )
    return ( 
        <div>
            {title}
            <p>© Rhema Services 2026</p>
            <FootNav/>
        </div>
    )
}