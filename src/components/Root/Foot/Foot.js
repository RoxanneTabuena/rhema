import { Map } from './Map'
import { Phone } from './Phone'
import { Address } from './Address'
import { Copy } from './Copy'
import style from "./foot.module.css"
export const Foot = () => {

    return ( 
        <div className={style.foot}>
            <Copy />
            <div className={style.info}>
                <div className={style.condensed}>
                    <Phone />
                    <Address/>
                </div>
                <Map/>
            </div>
        </div>
    )
}