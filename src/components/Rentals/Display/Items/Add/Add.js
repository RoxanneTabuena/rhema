import style from './add.module.css'
import { useContext } from 'react'
import { CartContext } from '../../../../../context/CartContext'

export const Add = ({item}) => {
    const [state, dispatch] = useContext(CartContext)

    const add = (item) => {
        const action = { type: 'ADD_ITEM', payload:item}
        dispatch(action)
    }

    return (
        <div onClick={()=>{add(item)}} className={style.add}>
            add to order
        </div>
    )
}