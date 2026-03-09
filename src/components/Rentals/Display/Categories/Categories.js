import { Category } from './Category'
import { inventory } from '../../inventory'
import style from './categories.module.css'
export const Categories = () => {
    return (
        <div className={style.categories}>
            {Object.keys(inventory).map((c)=>{
                return <Category key={c} title={c}/>
            })}
            <Category title="Drum Sets"/>
        </div>
    )
}