import { useContext, useState } from 'react'
import { CartContext } from '../../../../../../../../context/CartContext'
import style from './option.module.css'
export const Option = ({item}) => {
    const [state, dispatch] = useContext(CartContext)
    const order = state.items.some((i)=>{return i.id === item.id})
    const add = () => {
        const action = {type:"ADD_ITEM", payload:{...item, qty: 1}}
        dispatch(action)
    }
    const remove = () => {
        const action = {type:"REMOVE_ITEM", payload:item.id}
        dispatch(action)
    }
    const updateOrder = () => {
        order ? remove() : add()
    }
    return (
        <div className={style.option}>
            <div>
                <input type="checkbox" checked={order} onChange={()=>{updateOrder()}}></input>
                <p>{item.name}</p>
            </div>
        </div>
    )
}