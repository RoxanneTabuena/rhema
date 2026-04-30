import { Banner } from '../Blocks/Banner/Banner'
import style from './rentals.module.css'
export const Rentals = () => {
    return (
    <div className={style.rentals}>
        <Banner title='Rentals' summary={`Gear you need ready on your timeline`}/>
    </div>)
} 