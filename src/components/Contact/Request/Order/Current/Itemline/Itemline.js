import { useContext } from 'react'
import { CartContext } from '../../../../../../context/CartContext'
import { Qty } from './Qty'
import { Up } from './Up'
import { Down } from './Down'
import { Remove } from './Remove'
import style from './itemline.module.css'
export const Itemline = ({id}) => {
    const [state, dispatch] = useContext(CartContext)
    const item = state.items.find((i)=>{return i.id === id})

    return (
        <div className={style.itemline}>
            <Remove item={item}/>
            <p>{item.name}</p>
            <Down item={item} />
            <Qty item={item}/>
            <Up item={item}/>
            
        </div>
    )
}