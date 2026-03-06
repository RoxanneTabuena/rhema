import { drumInventoryCat } from './inventory'
import { inventory } from './inventory'
import { Dates } from './Dates/Dates'
import { useCart } from '../../hooks/useCart'
import { Relative } from './relative/Relative'
import style from './rentals.module.css'
export const Rentals = () => {
    const [state, dispatch] = useCart()
    const { dates } = state
    console.log(drumInventoryCat())
    
    return (
    <div className={style.rentals}>
        <h1 className = {style.logo}>Rentals Us</h1>
        <div className={style.content}>
            <p className={style.main}>main information for the page</p>
            <Dates/>
            <Relative/>
            {/* categories */}
        </div>
    </div>)
} 