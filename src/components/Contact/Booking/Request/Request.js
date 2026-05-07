import { Summary } from '../../../Blocks/Summary/Summary'
import { Order } from './Order/Order'
import style from './request.module.css'
export const Request = () => {
    return (
    <div className={style.request}>
        <Summary summary="Reserve your gear here!"/>
        <Order/>
    </div>)
} 