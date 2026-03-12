import { Option } from './Option/Option'
// import { useContext, useState } from 'react'
// import { CartContext } from '../../../../../../context/CartContext'
import style from './selector.module.css'
export const Selector = ({category}) => {

    return (
        <div className={style.selector}>
            {category.map((i)=>{
                return <Option key={i.id} item={i} />
            })}
        </div>
    )
}