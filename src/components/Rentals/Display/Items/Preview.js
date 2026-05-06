import { Add } from './Add/Add'
import { NavLink } from 'react-router-dom'
import style from './items.module.css'
export const Preview = ({item, mono}) => {
    let {name} = item
    if(mono){
        name = name.replace(mono.brand,'')
    }
    return (
        <div className={style.preview}>
            <NavLink to={`${name}`}>
                {name}
                {/* {product title, picture, availability, quick add} */}
                {/* click for full product page */}
            </NavLink>
            <Add item={item}/>
        </div>
    )
}