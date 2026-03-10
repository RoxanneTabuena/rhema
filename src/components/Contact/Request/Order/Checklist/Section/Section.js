import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../../../../../context/CartContext'
import style from './section.module.css'
export const Section = ({category, title}) => {
    const [state, dispatch] = useContext(CartContext)
    let items = state.items.filter((i)=>{return i.category===title})
    const [open, setOpen] = useState(items.length>0)
    console.log(open)
    return (
        <div className={style.section}>
            <input>{open? 'X' : '0'}</input>
            <p>{title}</p>
        </div>
    )
}