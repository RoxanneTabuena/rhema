import { NavLink } from 'react-router-dom'
import style from './brands.module.css'
export const Brands = ({category}) => {
    let brands = []
    category.forEach((c)=>{
        if(!brands.includes(c.brand)){
            brands.push(c.brand)
        }
    })
    return (
        <div className={style.brands}>
            <p>select a brand:</p>
            {brands.map((b)=>{
                return <NavLink to={b} key={b} >{b}</NavLink>
            })}
        </div>
    )
}