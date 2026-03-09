import style from './itemline.module.css'
export const Itemline = ({item}) => {
    const {name, qty} = item
    return (
        <div className={style.itemline}>
            <p>{name}</p>
            <p>{qty}</p>
            {/* increase qty */}
            {/* decrease qty */}
            {/* remove */}
        </div>
    )
}