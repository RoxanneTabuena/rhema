import { Itemline } from './Itemline/Itemline'
import { useContext } from 'react'
import { CartContext } from '../../../../../context/CartContext'
import style from './current.module.css'
export const Current = () => {
    const [state, dispatch] = useContext(CartContext)
    console.log(state.items)
    return (
        <div className={style.current}>
            <h3>Current Order</h3>
            {state.items.map((i)=>{
                return <Itemline key={i.id} item={i}/>
        
            })}
        </div>
    )
}