import { Selector } from './Selector/Selector'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../../../context/CartContext'
import style from './section.module.css'
export const Section = ({category, title}) => {
    const [state, dispatch] = useContext(CartContext)
    let items = state.items.filter((i)=>{return i.category===title})
    const [open, setOpen] = useState(items.length>0)

    return (
        <div className={style.section}>
            <h4>
                <input type="checkbox" checked={open} onChange={()=>{setOpen(!open)}}></input>
                <p>{title}</p>
            </h4>
            { open && <Selector/>}
        </div>
    )
}