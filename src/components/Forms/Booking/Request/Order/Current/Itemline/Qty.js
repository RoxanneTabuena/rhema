import { useContext, useState } from 'react'
import { CartContext } from '../../../../../../../context/CartContext'
import style from './itemline.module.css'
export const Qty = ({item}) => {
    const [edit, setEdit] = useState(false)
    const [state, dispatch] = useContext(CartContext)

    // update item quantity
    const update = (q) => {
        const newItem = {...item, qty:Number(q)}
        console.log(newItem)
        const action =  {type: 'UPDATE_QTY', payload:newItem}
        dispatch(action)
    }

    // show input on qty click
    const change =( <input 
                        className={style.edit}
                        type="number" 
                        value={item.qty} 
                        onChange={(e)=>{update(e.target.value)}}
                        onBlur={()=>{setEdit(false)}}></input>)

    // static qty display
    let view = <p>{item.qty}</p>

    return (
        <div className={style.qty} onClick={()=>{setEdit(true)}}>
            {edit? change : view}
        </div>
    )
}