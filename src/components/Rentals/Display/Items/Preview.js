import { Add } from './Add/Add'
import { NavLink } from 'react-router-dom'
import style from './items.module.css'
export const Preview = ({item, mono}) => {
    const {name} = item
    let title
    title = mono ? name.replace(mono.brand,'') : name
    return (
        <div className={style.preview}>
            <NavLink to={`${name}`}>
                {title}
                {/* {product title, picture, availability, quick add} */}
                {/* click for full product page */}
            </NavLink>
            <Add item={item}/>
        </div>
    )
}