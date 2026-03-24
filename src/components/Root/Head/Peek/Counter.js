import style from './peek.module.css'
export const Counter = ({count, tog}) => {
    return (
        <button className={style.counter} onClick={tog}>
            <p className={style.count}>{count}</p>
            peek img
        </button>
    )
}