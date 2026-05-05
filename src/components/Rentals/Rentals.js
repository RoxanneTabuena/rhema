import { Summary } from '../Blocks/Summary/Summary'
import style from './rentals.module.css'
export const Rentals = () => {
    return (
    <div className={style.rentals}>
        <Summary summary={`Gear you need ready on your timeline`}/>
    </div>)
} 