import { Preview } from './Preview'
import style from './items.module.css'
export const Items = ({items, brand}) => {
    let mono = false
    if(brand !== 'all'){
        mono = {brand: brand}
        items= items.filter((i)=>{
                    return i.brand === brand
                })
            }
    return (
        <div className={style.items}>
            {items.map((i)=>{
                return <Preview item={i} key={i.name} mono={mono}/>
            })}
        </div>
    )
}