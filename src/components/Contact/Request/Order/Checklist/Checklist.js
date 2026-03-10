import { Section } from './Section/Section'
import { inventory } from '../../../../Rentals/inventory'
import style from './checklist.module.css'
export const Checklist = () => {

    return (
        <div className={style.checklist}>
            {Object.keys(inventory).map((s)=>{
                return <Section key={s} title={s} category={inventory[s]}/>
            })}
        </div>
    )
}