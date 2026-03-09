import { Preview } from './Preview'
import style from './items.module.css'
export const Items = ({items, brand}) => {
    if(brand){
        console.log(items)
        items= items.filter((i)=>{
                    return i.brand === brand
                })
            }
            console.log(items)
    return (
        <div className={style.items}>
            {items.map((i)=>{
                return <Preview title={i.name} key={i.name}/>
            })}
        </div>
    )
}