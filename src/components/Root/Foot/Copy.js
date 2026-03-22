import style from './foot.module.css'
export const Copy = () => {
    return (
        <div className={style.copy}>
            <div className={style.title}>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/rhema/Rhema_logo_3d.png" alt="rhema logo">
                </img>
                <h3>Rhema Services</h3>
            </div>
            <p>© Rhema Services 2026</p>
        </div>
    )
}