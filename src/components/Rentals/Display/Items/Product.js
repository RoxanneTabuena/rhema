import { Add } from './Add/Add'
import style from './items.module.css'
export const Product = ({item}) => {
    return (
        <div className={style.product}>
            <h2>{item.name}</h2>
            <Add item={item}/>
            {/* product title */}
            {/* product picture */}
            {/* product description */}
            {/* product availability schedule */}
            {/* product factory link */}
            {/* product spec sheet */}
        </div>
    )
}