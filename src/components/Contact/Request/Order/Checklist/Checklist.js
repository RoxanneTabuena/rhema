import { Section } from './Section/Section'
import { inventory } from '../../../../Rentals/inventoryInfo'
import style from './checklist.module.css'
export const Checklist = () => {

    return (
        <div className={style.checklist}>
            <h3>Backline Checklist</h3>
            {Object.keys(inventory).map((s)=>{
                return <Section key={s} title={s} category={inventory[s]}/>
            })}
        </div>
    )
}