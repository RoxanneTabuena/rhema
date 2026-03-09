import { Preview } from './Preview'
import style from './items.module.css'
export const Items = ({items, brand}) => {
    if(brand !== 'all'){
        items= items.filter((i)=>{
                    return i.brand === brand
                })
            }
    return (
        <div className={style.items}>
            {items.map((i)=>{
                return <Preview item={i} key={i.name}/>
            })}
        </div>
    )
}