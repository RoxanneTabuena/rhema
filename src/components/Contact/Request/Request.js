import { Order } from './Order/Order'
import style from './request.module.css'
export const Request = () => {
    return (
    <div className={style.request}>
        <h1 className = {style.logo}>Rental Request</h1>
        <div className={style.content}>
            <p className={style.main}>how can we assist you?</p>
            <Order/>
        </div>
    </div>)
} 